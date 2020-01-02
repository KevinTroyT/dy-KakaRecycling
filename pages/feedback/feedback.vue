<template>
	<view class="feedback">
		<input type="text" class="contact-way" v-model="phone" placeholder="请输入您的联系方式">
		<input type="text" class="contact-way" v-model="title" placeholder="请输入标题">
		<view class="title">问题与意见</view>
		<textarea placeholder="请填写10个字以上的问题描述以便我们提供更好的帮助" v-model="task" class="question"/>
		<button class="commit" @click="commit">立即提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				task:'',
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				title:'',
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
		},
		methods: {
			commit(){
				if(this.phone == ''){
					uni.showModal({
					    title: '提示',
					    content: '联系方式不能为空',
					});
					return false
				}else if(!((/^1[34578]\d{9}$/).test(this.phone))){
					uni.showModal({
					    title: '提示',
					    content: '手机号码错误',
					});
					return false
				}else if(this.title == ''){
					uni.showModal({
					    title: '提示',
					    content: '请输入标题',
					});
					return false
				}else if(this.task == ''){
					uni.showModal({
					    title: '提示',
					    content: '请输入您的问题',
					});
					return false
				}else{
					uni.request({
						url: this.url + '/mobile/advicefeedback',
						method:'GET',
						header: {
							'content-type': 'application/x-www-form-urlencoded' ,// 默认值
							'token': this.token
						},
						data:{
							title:this.title,
							content:this.task,
							phone:this.phone,
							type:'1',
						},
						success: (res) => {
							console.log(res);
							if(res.data.result){
								uni.showToast({
									title: '提交成功',
									duration: 2000,
									success:function(){
										uni.switchTab({
											url:'../my/my'
										})
									}
								});
							}else{
								uni.showToast({
									title: res.data.msg,
									icon:'none',
									duration: 2000,
								});
							}
						}
					})
				}
			}
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
		padding-left: 20upx;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 20upx;
	}
	.title{
		font-size: 30upx;
		margin-top: 20upx;
	}
	.question{
		width: 100%;
		margin-top: 40upx;
		font-size: 30upx;
		border: 1px solid #ccc;
		border-radius: 20upx;
		padding: 10upx 20upx;
		box-sizing: border-box;
	}
	.commit{
		width: 100%;
		height: 100upx;
		border-radius: 50upx;
		background-color: #e89439;
		color: #fff;
		margin-top: 100upx;
	}
</style>
