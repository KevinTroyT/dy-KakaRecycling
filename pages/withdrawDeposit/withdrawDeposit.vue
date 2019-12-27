<template>
	<view>
		<view class="card">
			<view class="title">账户余额将提现到打款账户</view>
			<view class="money">￥563.23</view>
			<view class="bottom">
				<view class="left">账户余额:</view>
				<view class="num">￥8563.23</view>
			</view>
		</view>
		<button class="commit">提现到支付宝</button>
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
	page{
		background-color: #f2f2f2;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.card{
		width: 100%;
		height: 400upx;
		border-radius: 20upx;
		padding: 20upx 30upx;
		box-sizing: border-box;
		box-shadow: 0 0 10upx #ccc;
		background-color: #fff;
	}
	.card .title{
		font-size: 34upx;
		color: #7d838c;
	}
	.card .money{
		font-size: 75upx;
		margin-top: 20upx;
		border-bottom: 1px solid #f2f2f2;
		color: #000;
	}
	.card .bottom{
		width: 100%;
		height: 80upx;
		margin-top: 40upx;
	}
	.card .bottom .left{
		font-size: 32upx;
		float: left;
		color: #7d838c;
		margin-right: 20upx;
		line-height: 80upx;
		display: inline-block;
	}
	.card .bottom .num{
		font-size: 32upx;
		float: left;
		color: #7d838c;
		line-height: 80upx;
		display: inline-block;
	}
	.commit{
		width: 100%;
		height: 100upx;
		border-radius: 50upx;
		background-color: #e89439;
		color: #fff;
		margin-top: 500upx;
	}
</style>
