<template>
	<view>
		<view class="inviteBox">
			<view class="title">邀请好友躺着赚钱</view>
			<view class="title1">
				<view class="left">—现金返利</view>
				<view class="right">先到先得—</view>
			</view>
			<view class="box">
				<image src="../../static/images/invite.png" mode=""></image>
				<view class="con">
					<view class="invite">您的邀请码</view>
					<view class="inviteCode">{{code}}</view>
					<view class="bottom">好友注册时填写您的邀请码成为您的下级</view>
				</view>
			</view>
			<view class="copy">
				<button @click="copy">复制邀请码</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperHeight:573,
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				code:'',
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
					this.code = res.data.invitationNum
				}
			})
		},
		onLoad(){
			uni.getSystemInfo({
			    success:(res)=>{//es5语法不生效
			        console.log(res.windowHeight);
					let height = res.windowHeight-uni.upx2px(0)
					this.swiperHeight = height
			    }
			});
		},
		methods: {
			copy(){
				uni.setClipboardData({
					data:this.code,
					success:function(){
						uni.showToast({
							title: '复制成功',
							duration: 2000,
						});
					},
					fail:function(){
						uni.showToast({
							title: '复制失败请稍后再试',
							icon:'none',
							duration: 2000,
						});
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #ec5f3d;
	}
	.inviteBox .title{
		width: 100%;
		height: 150upx;
		font-size: 70upx;
		color: #fff;
		line-height: 150upx;
		text-align: center;
		margin-top: 50upx;
		font-weight: 400;
	}
	.inviteBox .title1{
		width: 100%;
		height: 80upx;
		padding: 0 25%;
		box-sizing: border-box;
		line-height: 80upx;
	}
	.inviteBox .title1>view{
		width: 50%;
		display: inline-block;
		height: 100%;
		font-size: 34upx;
		color: #fff;
	}
	.box{
		position: relative;
		width: 100%;
		padding-top: 40upx;
		display: flex;
		justify-content: center;
	}
	.box image{
		width: 640upx;
		height: 600upx;
	}
	.box .con{
		position: absolute;
		width: 100%;
		top: 240upx;
		text-align: center;
	}
	.box .con .invite{
		color: #ec5f3d;
		font-size: 32upx;
	}
	.box .con .inviteCode{
		color: #ec5f3d;
		font-size: 56upx;
	}
	.box .con .bottom{
		font-size: 30upx;
		color: #ccc;
		padding: 0 25%;
		box-sizing: border-box;
		line-height: 34upx;
	}
	.copy{
		width: 100%;
		height: 80upx;
		padding: 0 100upx;
		margin-top: 60upx;
		box-sizing: border-box;
	}
	.copy button{
		width: 100%;
		height: 100%;
		line-height: 80upx;
		background-color: #f3d75c;
		color: #b55d27;
		font-size: 36upx;
		border-radius: 80upx;
	}
</style>
