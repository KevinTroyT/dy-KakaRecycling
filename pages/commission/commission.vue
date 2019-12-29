<template>
	<view>
		<view class="top">
			<view class="top1"></view>
			<view class="top2"></view>
			<view class="card">
				<view class="title">今日返佣</view>
				<view class="number">{{todaymoney}}</view>
				<view class="card-bottom">
					<view class="left">
						<view class="name">累计返佣:</view>
						<view class="num">{{summoney}}</view>
					</view>
					<view class="right">
						<view class="name">昨日返佣:</view>
						<view class="num">{{yesterdaymoney}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="record">
			<view class="title">返佣记录</view>
			<block v-for="(item,index) in list" :key="index">
				<view class="item">
					<view class="img">
						<image src="../../static/images/lipinka (92).png" mode=""></image>
					</view>
					<view class="middle">
						<view class="con">推荐好友销卡</view>
						<view class="time">{{item.createTime}}</view>
					</view>
					<view class="right">￥{{item.rebateMoney}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				todaymoney:'',
				summoney:'',
				yesterdaymoney:'',
				list:[],
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			console.log('token',this.token)
			uni.request({
				url: this.url + '/mobile/getRebateLog',
				method:'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token': this.token
				},
				data:{
					
				},
				success: (res) => {
					console.log(res);
					this.todaymoney = (res.data.data.money.todaymoney).toFixed(2)
					this.summoney = (res.data.data.money.summoney).toFixed(2)
					this.yesterdaymoney = (res.data.data.money.yesterdaymoney).toFixed(2)
					this.list = res.data.data.list
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color: #f2f2f2;
	}
	.top{
		position: relative;
		width: 100%;
		height: 450upx;
	}
	.top .top1{
		width: 100%;
		height: 270upx;
		background-image: linear-gradient(to right, #efa83b , #e79038);
	}
	.top .top2{
		width: 100%;
		height: 80upx;
		background-image: #fff;
	}
	.card{
		position: absolute;
		left: 10%;
		top: 90upx;
		width: 80%;
		background-color: #fff;
		border-radius: 15upx;
		padding-top: 10upx;
		box-sizing: border-box;
		height: 250upx;
	}
	.card .title{
		width: 100%;
		text-align: center;
		font-size: 32upx;
	}
	.card .number{
		width: 100%;
		font-size: 54upx;
		color: #d5352f;
		text-align: center;
	}
	.card .card-bottom{
		width: 100%;
		height: 80upx;
	}
	.card .card-bottom view{
		display: inline-block;
	}
	.card .card-bottom>view{
		width: 50%;
		text-align: center;
	}
	.card .card-bottom .left{
		box-sizing: border-box;
		border-right: 1px solid #dcdcdc;
	}
	.card .card-bottom .name{
		font-size: 30upx;
		margin-right: 10upx;
	}
	.card .card-bottom .num{
		font-size: 32upx;
		color: #d5352f;
	}
	
	.record{
		width: 100%;
	}
	.record .title{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		font-size: 36upx;
		text-align: center;
	}
	.record .item{
		width: 100%;
		height: 140upx;
		padding: 20upx 30upx;
		margin-top: 10upx;
		box-sizing: border-box;
	}
	.record .item .img{
		width: 80upx;
		height: 80upx;
		margin-top: 10upx;
		margin-right: 20upx;
		float: left;
	}
	.record .item .img image{
		width: 100%;
		height: 100%;
	}
	.record .item .middle{
		float: left;
	}
	.record .item .middle .con{
		font-size: 34upx;
		color: #333;
	}
	.record .item .middle .time{
		font-size: 30upx;
		color: #a3a3a3;
	}
	.record .item .right{
		float: right;
		line-height: 100upx;
		font-size: 34upx;
		color: #d5352f;
	}
</style>
