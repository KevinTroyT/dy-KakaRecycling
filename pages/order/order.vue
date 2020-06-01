<template>
	<view>
		<view class="top">
			<block
				v-for="(i,index) in item"
				:key="index"
			>
				<view @click="change(index)" :class="current == index ? 'active' : ''">{{i}}</view>
			</block>
		</view>
		
		<view class="content" v-if="orderList.length > 0">
			<block v-for="(item,index) in orderList" :key="index">
				<view class="item">
					<view class="item-top">
						<view class="left">
							<view class="name">交易编号:</view>
							<view class="num">{{item.id}}</view>
						</view>
						<view class="right">￥{{item.discount*item.feedbackValue}}</view>
					</view>
					<view class="item-content">
						<view class="img">
							<image :src="src+item.imgPath" mode=""></image>
						</view>
						<view class="cardNum">
							<view class="i">
								<view class="name">名称:</view>
								<view class="con">{{item.commodityName}}</view>
								<view class="state">{{item.cardStr}}</view>
							</view>
							<view class="i card">
								<view class="name">卡号:</view>
								<view class="con">{{item.cardNumber}}</view>
							</view>
							<view class="i card">
								<view class="name">卡密:</view>
								<view class="con">{{item.cardPassword}}</view>
							</view>
						</view>
					</view>
					<view class="item-bottom">{{item.createTime}}</view>
				</view>
			</block>
		</view>
		
		<view class="noOrder" v-else>
			<image src="../../static/images/lipinka (96).png" mode=""></image>
			<view>暂无订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:['全部','已成功','失败','处理中'],
				current:0,
				src:'',
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				orderList:[],
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			console.log(this.token)
			if(!this.token){
				uni.navigateTo({
					url: '../login/login'
				})
				return 
			}
			this.src = this.url
			uni.request({
				url: this.url + '/mobile/getOrderCardFlowList',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Authorization':this.token
				},
				data:{
					type:2,
				},
				success: (res) => {
					console.log(res);
					this.orderList = res.data.data
				}
			})
		},
		methods: {
			change(index){
				this.current = index
				let cardState = ''
				console.log(index)
				if(index != 0){
					cardState = index - 1
				}
				uni.request({
					url: this.url + '/mobile/getOrderCardFlowList',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'Authorization':this.token
					},
					data:{
						type:2,
						cardState:cardState
					},
					success: (res) => {
						console.log(res);
						this.orderList = res.data.data
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #e6e6e6;
	}
	.top{
		width: 100%;
		height: 100upx;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	.top>view{
		display: inline-block;
		width: 25%;
		padding: 0 5%;
		box-sizing: border-box;
		line-height: 100upx;
		font-size: 34upx;
	}
	.top>.active{
		color: #F18F02;
	}
	
	.content{
		margin-top: 120upx;
		width: 100%;
	}
	/* 订单卡片样式 */
	.item{
		width: 100%;
		height: 340upx;
		background-color: #fff;
		padding: 0 20upx;
		margin-bottom: 20upx;
		box-sizing: border-box;
	}
	.item .item-top{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1px solid #ccc;
	}
	.item .item-top .left{
		float: left;
		display: inline-block;
		padding-left: 10upx;
	}
	.item .item-top .left .name{
		display: inline-block;
		line-height: 80upx;
		font-size: 34upx;
		margin-right: 10upx;
		color: #333;
	}
	.item .item-top .left .num{
		display: inline-block;
		line-height: 80upx;
		font-size: 34upx;
		color: #999;
	}
	.item .item-top .right{
		float: right;
		line-height: 80upx;
		color: #F18F02;
		font-size: 34upx;
		padding-right: 20upx;
		display: inline-block;
	}
	.item .item-content{
		width: 100%;
		height: 200upx;
		padding-bottom: 20upx;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	.item .item-content .img{
		width: 100upx;
		height: 100%;
		display: inline-block;
		float: left;
		margin-right: 20upx;
	}
	.item .item-content .img image{
		width: 100upx;
		height: 100upx;
		margin-top: 50upx;
	}
	.item .item-content .cardNum{
		display: inline-block;
		float: left;
		width: 80%;
	}
	.item .item-content .cardNum .i{
		height: 50upx;
		line-height: 55upx;
	}
	.item .item-content .cardNum .i:nth-child(1){
		margin-top: 10upx;
	}
	.item .item-content .cardNum .i .name{
		display: inline-block;
		margin-right: 10upx;
	}
	.item .item-content .cardNum .i .con{
		display: inline-block;
		color: #999;
	}
	.item .item-content .cardNum .card .name{
		float: left;
	}
	.item .item-content .cardNum .card .con{
		float: left;
		width: 85%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item .item-content .cardNum .i .state{
		display: inline-block;
		float: right;
		font-size: 30upx;
		color: #999;
	}
	.item .item-bottom{
		text-align: right;
		color: #999;
		padding-right: 10upx;
	}
	
	.noOrder{
		width: 100%;
		margin-top: 320upx;
		text-align: center;
	}
	.noOrder image{
		width: 400upx;
		height: 320upx;
	}
	.noOrder view{
		font-size: 42upx;
		color: #ccc;
	}
</style>
