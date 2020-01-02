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
				<input type="number" v-model="phone" class="input" placeholder="请输入手机号">
			</view>
			<view class="password">
				<view class="i">
					<image src="../../static/images/2.png" mode=""></image>
				</view>
				<input type="password" v-model="pwd" class="input" placeholder="请输入密码">
			</view>
		</view>
		<view class="bottom">
			<button @click="logIn">账号登陆</button>
			<navigator url="../register/register" class="nav">
				<view class="text">注册账号</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				pwd: '',
			}
		},
		onBackPress(event){
			// if(event.from == "backbutton"){
			// 	uni.showModal({  
			// 	    title: '提示',  
			// 	    content: '是否退出uni-app？',  
			// 	    success: function(res) {  
			// 	        if (res.confirm) {  
			// 	            // 退出当前应用，改方法只在App中生效  
			// 	            plus.runtime.quit();  
			// 	        } else if (res.cancel) {  
			// 	            console.log('用户点击取消');  
			// 	        }  
			// 	    }  
			// 	});
			// 	return true  
			// }
			if(event.from == "backbutton"){
				uni.switchTab({
					url:'../index/index'
				})
			}
			console.log(event)
		},
		methods: {
			logIn(){
				uni.request({
					url: this.url + '/mobile/login',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					},
					data:{
						type:'userCodeLogin',
						userCode:this.phone,
						password:this.pwd
					},
					success: (res) => {
						console.log(res)
						if(res.data.result){
							uni.showToast({
								title: '登录成功',
								duration: 2000,
							});
							uni.setStorageSync('token',res.data.data)
							uni.switchTab({
								url:'../index/index'
							})
						}else{
							uni.showToast({
								title: res.data.msg,
								icon:'none',
								duration: 2000,
							});
						}
					},
					error:function(err){
					    uni.showToast({
					    	title: '登录失败，请稍后再试',
							icon:'none',
					    	duration: 2000,
					    });
					},
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
		margin-bottom: 80upx;
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
		background-color: #1d81cf;
		color: #fff;
		border-radius: 20upx;
	}
	.bottom .nav{
		width: 35%;
		text-align: center;
		margin-left: 250upx;
		margin-top: 80upx;
		font-size: 28upx;
		color: #1d81cf;
	}
	.bottom .nav a{
		width: 100%;
	}
</style>
