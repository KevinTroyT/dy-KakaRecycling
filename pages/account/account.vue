<template>
	<view>
		<view class="title">支付宝账号</view>
		<view class="name">
			<view class="headline">真实姓名:</view>
			<input type="text" v-model="name" placeholder="请输入您的真实姓名" />
		</view>
		<view class="number">
			<view class="headline">支付宝账号:</view>
			<input type="text" v-model="phone" placeholder="请输入您的支付宝账号" />
		</view>
		<view class="btn">
			<button>提交账号</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				phone:'',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.title{
		font-size: 40upx;
		color: #e89439;
		text-align: left;
		font-weight: 550;
		line-height: 100upx;
		padding-left: 20upx;
	}
	.name{
		width: 100%;
		height: 100upx;
		margin-top: 80upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.name .headline,.number .headline{
		width: 27%;
		font-size: 34upx;
		float: left;
		line-height: 100upx;
		margin-right: 10upx;
		display: inline-block;
		text-align-last: justify;
	}
	.name input,.number input{
		width: 67%;
		height: 100upx;
		float: left;
		padding-left: 20upx;
		font-size: 34upx;
		box-sizing: border-box;
		display: inline-block;
	}
	.number{
		width: 100%;
		height: 100upx;
		padding: 0 20upx;
		margin-top: 20upx;
		box-sizing: border-box;
	}
	.btn{
		width: 100%;
		height: 100upx;
		margin-top: 80upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.btn button{
		width: 100%;
		height: 100%;
		background-color: #e89439;
		color: #fff;
	}
</style>
