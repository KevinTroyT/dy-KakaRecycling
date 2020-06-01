<template>
	<view>
		<view class="user">
			<image src="../../static/images/user.png" mode=""></image>
		</view>
		<view class="top">
			<view class="phone">
				<view class="i">
					<image src="../../static/images/1.png" mode=""></image>
				</view>
				<input type="text" class="input" v-model="oldPsd" placeholder="请输入您的旧密码">
			</view>
			<view class="password">
				<view class="i">
					<image src="../../static/images/2.png" mode=""></image>
				</view>
				<input type="password" class="input" v-model="newPsd" placeholder="请输入您的新密码">
			</view>
			<view class="password">
				<view class="i">
					<image src="../../static/images/2.png" mode=""></image>
				</view>
				<input type="password" class="input" v-model="newPsd1" placeholder="请再次确认您的新密码">
			</view>
		</view>
		<view class="bottom">
			<button @click="updatePsd">修改密码</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPsd:'',
				newPsd:'',
				newPsd1:'',
				id:'',
				token:'',
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			console.log(this.token)
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
					this.id = res.data.userId
				}
			})
		},
		methods: {
			updatePsd(){
				if(this.newPsd != this.newPsd1){
					uni.showModal({
					    title: '提示',
					    content: '输入的两次新密码不一致',
					});
					return false
				}
				uni.request({
					url: this.url + '/mobile/updatePwd',
					method:'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'Authorization': this.token
					},
					data:{
						id:this.id,
						oldpwd:this.oldPsd,
						newpwd:this.newPsd
					},
					success: (res) => {
						console.log(res);
						if(res.data.result){
							uni.showToast({
								title: '修改成功',
								duration: 2000,
								success:function(){
									uni.navigateBack({
										delta: 1
									});
								}
							});
						}else{
							uni.showToast({
								title: res.data.msg,
								icon:'none',
								duration: 2000
							});
						}
					}
				})
			}
		}
	}
</script>

<style>
	.user{
		width: 100%;
		height: 200upx;
		text-align: center;
	}
	.user image{
		width: 200upx;
		height: 200upx;
	}
	
	/* 单选框样式 */
	.content{
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: center;
		margin-top: 200upx;
	}
	.content view{
		display: inline-block;
	}
	.content label{
		display: inline-block;
	}
	.content radio{
		display: inline-block;
	}
	
	
	page{
		background-color: #f9fcfd;
	}
	/* 输入框部分样式 */
	.top{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 40upx;
	}
	.top .phone{
		width: 100%;
		height: 100upx;
		border: 1px solid #ccc;
		border-radius: 100upx;
		margin-bottom: 40upx;
		padding-left: 50upx;
		box-sizing: border-box;
	}
	.top .phone .i{
		float: left;
		display: inline-block;
		width: 35upx;
		height: 100upx;
		padding-top: 25upx;
		box-sizing: border-box;
	}
	.top .phone .i image{
		width: 100%;
		height: 50upx;
	}
	.top .phone .input{
		display: inline-block;
		width: 80%;
		height: 90upx;
		padding-left: 30upx;
		box-sizing: border-box;
	}
	.top .password{
		width: 100%;
		height: 100upx;
		border: 1px solid #ccc;
		margin-bottom: 40upx;
		border-radius: 100upx;
		padding-left: 50upx;
		box-sizing: border-box;
	}
	.top .password .i{
		float: left;
		display: inline-block;
		width: 35upx;
		height: 100upx;
		padding-top: 25upx;
		box-sizing: border-box;
	}
	.top .password .i image{
		width: 100%;
		height: 50upx;
	}
	.top .password .input{
		display: inline-block;
		width: 80%;
		height: 90upx;
		padding-left: 30upx;
		box-sizing: border-box;
	}
	/* 底部按钮样式 */
	.bottom{
		width: 100%;
		margin-top: 180upx;
	}
	.bottom button{
		width: 80%;
		height: 100upx;
		line-height: 100upx;
		border: none;
		background-color: #3db6ae;
		color: #fff;
		border-radius: 20upx;
	}
	.bottom .nav{
		width: 35%;
		text-align: center;
		margin-left: 250upx;
		margin-top: 80upx;
		font-size: 28upx;
		color: #3db6ae;
	}
	.bottom .nav a{
		width: 100%;
	}
</style>
