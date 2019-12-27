<template>
	<view>
		<view class="background"></view>
		<view class="top">
			<view class="user">
				<view class="img">
					<image src="../../static/images/images.jpg" mode=""></image>
				</view>
				<view class="middle">
					<view class="name">
						<view class="username">.</view>
						<image src="../../static/images/lipinka (50).png" mode=""></image>
					</view>
					<view class="phone">17320140486</view>
				</view>
				<view class="right">
					<view class="btn">打款账户</view>
				</view>
			</view>
			<view class="userMoney">
				<view class="left">
					<view class="name">账户余额</view>
					<view class="num">0.00</view>
				</view>
				<view class="right">
					<view class="withdraw-deposit">提现</view>
					<view class="record">记录</view>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="item">
				<image src="../../static/images/lipinka (53).png" mode=""></image>
				<view class="name">我的分销</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (93).png" mode=""></image>
				<view class="name">推广赚钱</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (55).png" mode=""></image>
				<view class="name">联系我们</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (65).png" mode=""></image>
				<view class="name">企业回收</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (55).png" mode=""></image>
				<view class="name">招商合作</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (93).png" mode=""></image>
				<view class="name">常见问题</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (53).png" mode=""></image>
				<view class="name">意见反馈</view>
			</view>
			<view class="item">
				<image src="../../static/images/lipinka (65).png" mode=""></image>
				<view class="name">设置</view>
			</view>
			<view class="item">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	/* 底部九宫格样式 */
	.content{
		width: 90%;
		margin-left: 5%;
		margin-top: 30upx;
		height: 600upx;
		background-color: #fff;
	}
	.content .item{
		width: 33.3%;
		height: 200upx;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		float: left;
		box-sizing: border-box;
		text-align: center;
	}
	.content .item:nth-child(3),.content .item:nth-child(6),.content .item:nth-child(9){
		border-right: none;
	}
	.content .item:nth-child(7),.content .item:nth-child(8),.content .item:nth-child(9){
		border-bottom: none;
	}
	.content .item image{
		width: 80upx;
		height: 80upx;
		margin-top: 20upx;
	}
	
	page{
		background-color: #f2f2f2;
	}
	.background{
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 200upx;
		background-color: #6ac4c0;
	}
	.top{
		width: 90%;
		height: 360upx;
		margin-left: 5%;
		margin-top: 100upx;
		border-radius: 20upx;
		padding: 30upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.top .user{
		width: 100%;
		height: 200upx;
		padding-top: 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.top .user .img{
		width: 130upx;
		height: 130upx;
		border-radius: 50%;
		margin-right: 20upx;
		float: left;
		display: inline-block;
	}
	.top .user .img image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.top .middle{
		height: 100%;
		padding-top: 30upx;
		box-sizing: border-box;
		display: inline-block;
	}
	.top .middle .name .username{
		display: inline-block;
		margin-right: 25upx;
	}
	.top .middle .name image{
		width: 30upx;
		height: 30upx;
		display: inline-block;
	}
	.top .right{
		width: 160upx;
		height: 100%;
		float: right;
		display: inline-block;
	}
	.top .right .btn{
		width: 100%;
		height: 50upx;
		margin-top: 35upx;
		line-height: 50upx;
		text-align: center;
		border: 1px solid #c8332d;
		background-color: #fff;
		color: #c8332d;
		border-radius: 30upx;
	}
	.top .userMoney{
		width: 100%;
		height: 100upx;
	}
	.top .userMoney .left{
		display: inline-block;
		width: 50%;
		height: 100%;
		padding-top: 20upx;
		box-sizing: border-box;
	}
	.top .userMoney .left .name{
		font-size: 28upx;
		color: #4b4b4b;
		line-height: 40upx;
	}
	.top .userMoney .left .num{
		font-size: 36upx;
		color: #5b5b5b;
		line-height: 40upx;
	}
	.top .userMoney .right{
		display: inline-block;
		width: 50%;
		height: 100%;
	}
	.top .userMoney .right .withdraw-deposit{
		display: inline-block;
		width: 150upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		background-color: #6ac4c0;
		margin-top: 20upx;
		border-radius: 10upx;
		color: #fff;
	}
	.top .userMoney .right .record{
		display: inline-block;
		float: right;
		line-height: 100upx;
		color: #6ac4c0;
	}
</style>
