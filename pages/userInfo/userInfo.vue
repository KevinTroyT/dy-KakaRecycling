<template>
	<view>
		<view class="head-portrait">
			<view class="title">头像</view>
			<view class="img">
				<image src="../../static/images/images.jpg" mode=""></image>
			</view>
		</view>
		<view class="username">
			<view class="title">用户名</view>
			<view class="name">Mis Emma</view>
			<image src="../../static/images/right_1.png" class="right-icon" mode=""></image>
		</view>
		<view class="username">
			<view class="title">修改密码</view>
			<image src="../../static/images/right_1.png" class="right-icon" mode=""></image>
		</view>
		<view class="username">
			<view class="title">退出登录</view>
			<image src="../../static/images/right_1.png" class="right-icon" mode=""></image>
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
	.title{
		display: inline-block;
		font-size: 34upx;
		line-height: 100upx;
		float: left;
	}
	.head-portrait{
		width: 100%;
		height: 180upx;
		padding: 40upx 20upx;
		box-sizing: border-box;
	}
	.head-portrait .img{
		display: inline-block;
		float: right;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.head-portrait .img image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.username{
		position: relative;
		width: 100%;
		height: 100upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.username .name{
		float: right;
		padding-right: 40upx;
		line-height: 100upx;
		color: #707070;
	}
	.username .right-icon{
		width: 40upx;
		height: 50upx;
		position: absolute;
		top: 25upx;
		right: 10upx;
	}
</style>
