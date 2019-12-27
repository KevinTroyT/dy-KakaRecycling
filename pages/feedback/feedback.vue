<template>
	<view class="feedback">
		<input type="text" class="contact-way" v-model="phone" placeholder="请输入您的联系方式">
		<view class="title">问题与意见</view>
		<textarea placeholder="请填写10个字以上的问题描述以便我们提供更好的帮助" class="question"/>
		<button class="commit">立即提交</button>
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
	.feedback{
		width: 100%;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.contact-way{
		width: 100%;
		height: 100upx;
		margin-top: 30upx;
		line-height: 100upx;
		font-size: 34upx;
	}
	.title{
		font-size: 30upx;
		margin-top: 20upx;
	}
	.question{
		width: 100%;
		margin-top: 40upx;
		font-size: 30upx;
	}
	.commit{
		width: 100%;
		height: 100upx;
		border-radius: 50upx;
		background-color: #e89439;
		color: #fff;
		margin-top: 80upx;
	}
</style>
