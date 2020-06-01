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
			<button @click="commit">提交账号</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				phone:'',
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			console.log('token',this.token)
			uni.request({
				url: this.url + '/mobile/realData',
				method:'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Authorization': this.token
				},
				data:{
					
				},
				success: (res) => {
					console.log(res);
					this.name = res.data.realName
					this.phone = res.data.alipayAccount
				}
			})
		},
		methods: {
			commit(){
				if(this.name == '') {
					uni.showModal({
					    title: '提示',
					    content: '用户名不能为空',
					});
					return false
				}else if(this.phone == '') {
					uni.showModal({
					    title: '提示',
					    content: '支付宝账号不能为空',
					});
					return false
				}else {
					uni.request({
						url: this.url + '/mobile/realName',
						method:'GET',
						header: {
							'content-type': 'application/x-www-form-urlencoded' ,// 默认值
							'Authorization': this.token
						},
						data:{
							name:this.name,
							zhifu:this.phone
						},
						success: (res) => {
							console.log(res);
							if(res.data.result){
								uni.showToast({
									title:res.data.msg,
									duration:1500,
									success:function(){
										//提交成功
										uni.navigateBack({
											delta: 1
										});
									}
								})
							}else{
								uni.showToast({
									title:res.data.msg,
									duration:1500,
								})
							}
						}
					})
				}
			}
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
