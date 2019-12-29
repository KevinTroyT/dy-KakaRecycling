<template>
	<view>
		<!--注册 -->
		<view class="aaa">
			<view class="img">
				<image src="../../static/images/user.png" mode=""></image>
			</view>
		    <view class='zhuce' >
		        <view class='zhuce_ouput'>
		            <view>手机号：</view><input id="phone" type="number" v-model="phone"  placeholder='请输入手机号码' />
		        </view>	
		        <view class='zhuce_ouput'>
		            <view>密码：</view><input id="password" v-model="password" type="password" placeholder='请输入密码' />
		        </view>
		        <view class='zhuce_ouput'>
		            <view>验证码：</view><input id="veri" type="number" v-model="code" placeholder='请输入验证码' /><view style="display: inline-block;" id="getyzm" @click="sendCode">{{num}}</view>
		        </view>
				<view class='zhuce_ouput'>
				    <view>邀请码：</view><input id="invite" v-model="invite" type="invite" placeholder='请填写邀请码(选填)' />
				</view>
				<view class='xieyishu'>
					<view class="login" style="color: #000;">已有账户?<view style="color: #1d81cf;display: inline-block;" @click="goLogin">立即登陆</view></view>
				</view>	
		        <button class="registerBtn" @click="register">立即注册</button>
		    <view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				password:'',
				code:'',
				num:'获取验证码',
				invite:'',
			}
		},
		methods: {
			goService(){
				// uni.navigateTo({
				// 	url: '../service/service'
				// })
			},
			goLogin(){
				uni.navigateTo({
					url: '../login/login'
				})
			},
			register(){
				var passwordReg=/^[\d\w]{6,12}$/;//密码格式6位到16位数字字母
				var phoneReg = /^[1]([3-9])[0-9]{9}$/;//电话
				if(!phoneReg.test(this.phone)){
					uni.showModal({
						content: '手机格式不正确',
						showCancel: false
					});
				    return false;
				}
				if(!passwordReg.test(this.password)){
					uni.showModal({
						content: '密码格式不正确',
						showCancel: false
					});
				    return false;
				}
				uni.request({
					url: this.url + '/mobile/register',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					},
					data:{
						userCode:this.phone,
						veri:this.code,
						invitationNum:this.invite,
						password:this.password,
						phone:this.phone
					},
					success: (res) => {
						console.log(res)
						if(res.data.result){
							uni.showToast({
								title: '注册成功',
								duration: 2000,
							});
							uni.navigateTo({//注册成功后跳转到登录界面
								url: '../login/login'
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
					    	title: '注册失败，请稍后再试',
							icon:'none',
					    	duration: 2000,
					    });
					},
				})
			},
			sendCode(){
				let _this = this
				if( this.num != '获取验证码'){
				    return false;
				}
				if (!this.phone){
					uni.showModal({
						content: '手机号不能为空!',
						showCancel: false
					});
				    return false;
				}
				var phoneReg = /^[1]([3-9])[0-9]{9}$/;//电话
				if(!phoneReg.test(this.phone)){
				    uni.showModal({
				    	content: '手机号码格式不正确!',
				    	showCancel: false
				    });
				    return false;
				}
				uni.request({
					url: this.url + '/mobile/generateVeriCode',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					},
					data:{
						type:'register',
						phone:this.phone
					},
					success: (res) => {
						console.log(res);
						if(res.data.result){
							uni.showToast({
								title: '发送成功',
								duration: 2000,
							});
							let num = 60
							let a = setInterval(function () {//设置定时器60s
							    num-=1
							    console.log(num)
							    _this.num = num
							    if(num<2){
							        clearInterval(a)
									_this.num = '获取验证码'
							    }
							},1000)
						}else{
							uni.showToast({
								title: '发送失败请稍后再试',
								icon:'none',
								duration: 2000,
							});
						}
					},
					error:function(xhr,textStatus){
					    uni.showToast({
					    	title: '发送失败请稍后再试',
					    	icon:'none',
					    	duration: 2000,
					    });
					},
				})
			},
		}
	}
</script>

<style>
	.aaa{
		/* margin-top: 15%; */
	}
	.aaa .img{
		width: 100%;
		text-align: center;
	}
	.aaa .img image{
		width: 200upx;
		height: 200upx;
	}
	.zhuce{
		width: 100%;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.zhuce_ouput{
		width: 100%;
		font-size: 30upx;
		display: flex;
		height: 100upx;
		line-height: 100upx;
		align-items: center;
		position: relative;
		border: 1px solid #ccc;
		border-radius: 100upx;
		padding-left: 30upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
	}
	.zhuce_ouput>view{
	    display: inline-block;
	    text-align: right;
	    color: rgb(33,33,33);
	    width: 20%;
		float: left;
	}
	.zhuce_ouput>input{
	    width: 360upx;
	}
	#getyzm{
		font-size: 30upx;
		width: 200upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		color: #1d81cf;
		border-radius: 10upx;
	}
	.registerBtn{
		background-color: #1d81cf;
		color: white;
		width: 90%;
		font-size: 36upx;
		height: 85upx;
		line-height: 85upx;
		border-radius: 20upx;
		margin-top: 50upx;
		text-align: center;
	}
	.text{
		text-align: center;
		margin-top: 70upx;
		font-size: 32upx;
	}
	.login{
		text-align: center;
		margin-top: 60upx;
	}
</style>
