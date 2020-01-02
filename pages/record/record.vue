<template>
	<view>
		<view class="top">
			<view class="box">
				<block v-for="(i,index) in item" :key="index">
					<view 
						@click="change(index)"
						:class="{'active':current==index}"
					>
						{{i}}
					</view>
				</block>
			</view>
		</view>
		<view class="content">
			<block v-for="(item,index) in list" :key="index">
				<view class="item">
					<view class="money">
						<view class="name">申请提现</view>
						<view class="num">+{{item.money}}</view>
					</view>
					<view class="time">
						<view class="name">申请时间</view>
						<view class="num">{{item.createTime}}</view>
					</view>
					<view class="state">
						<view class="name">申请状态</view>
						<view class="num" v-if="item.state == 0">提现中</view>
						<view class="num" v-if="item.state == 1">提现成功</view>
						<view class="num" v-if="item.state == 2">提现失败</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:['提现中','已提现'],
				current:0,
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				list:[],
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			uni.request({
				url: this.url + '/mobile/withdrawLogList',
				method:'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token': this.token
				},
				data:{
					state:this.current
				},
				success: (res) => {
					console.log(res);
					this.list = res.data.data
				}
			})
		},
		methods: {
			change(index){
				this.current = index
				uni.request({
					url: this.url + '/mobile/withdrawLogList',
					method:'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token': this.token
					},
					data:{
						state:index
					},
					success: (res) => {
						console.log(res);
						this.list = res.data.data
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #fcfcfc;
	}
	.top{
		width: 100%;
		height: 100upx;
	}
	.top .box{
		width: 50%;
		height: 80upx;
		margin-left: 25%;
		margin-top: 10upx;
	}
	.top .box>view{
		display: inline-block;
		width: 50%;
		line-height: 80upx;
		font-size: 34upx;
		color: #ccc;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #ccc;
		background-color: #fff;
	}
	.top .box>view:nth-child(1){
		border-right: none;
		border-radius:20upx 0 0 20upx;
	}
	.top .box>view:nth-child(2){
		border-left: none;
		border-radius:0 20upx 20upx 0;
	}
	.top .box .active{
		background-color: #e89439;
		color: #fff;
	}
	
	.content{
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.content .item{
		width: 100%;
		height: 250upx;
		padding: 0 15upx;
		margin-top: 40upx;
		box-shadow: 0upx 0upx 20upx #ccc;
		box-sizing: border-box;
		background-color: #fff;
	}
	.item .money,.item .time,.item .state{
		width: 100%;
		height: 60upx;
	}
	.item .money .name{
		color: #333;
	}
	.item .money .num{
		color: #e89439;
	}
	.item .name{
		color: #7b7b7b;
		display: inline-block;
		float: left;
		line-height: 60upx;
		font-size: 33upx;
	}
	.item .num{
		color: #7b7b7b;
		display: inline-block;
		float: right;
		line-height: 60upx;
		font-size: 33upx;
	}
</style>
