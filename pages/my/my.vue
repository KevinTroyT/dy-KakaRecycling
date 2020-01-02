<template>
	<view>
		<view class="background"></view>
		<view class="top">
			<view class="user">
				<view class="img">
					<image src="../../static/images/images.jpg" mode=""></image>
				</view>
				<view class="middle">
					<view class="name">
						<view class="username">{{name}}</view>
						<image src="../../static/images/lipinka (50).png" mode=""></image>
					</view>
					<view class="phone">{{phone}}</view>
				</view>
				<view class="right">
					<view class="btn" @click="goAccount">打款账户</view>
				</view>
			</view>
			<view class="userMoney">
				<view class="left">
					<view class="name">账户余额</view>
					<view class="num">{{Number(rebateMoney).toFixed(1)}}</view>
				</view>
				<view class="right">
					<view class="withdraw-deposit" @click="goWithdrawDeposit">提现</view>
					<view class="record" @click="goRecord">记录</view>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="item" @click="goCommission">
				<image src="../../static/images/a1.png" mode=""></image>
				<view class="name">我的分销</view>
			</view>
			<view class="item" @click="goInvite">
				<image src="../../static/images/a2.png" mode=""></image>
				<view class="name">推广赚钱</view>
			</view>
			<view class="item" @click="goFeedback">
				<image src="../../static/images/a3.png" mode=""></image>
				<view class="name">意见反馈</view>
			</view>
			<view class="item" @click="goCompany_recovery">
				<image src="../../static/images/a4.png" mode=""></image>
				<view class="name">企业回收</view>
			</view>
			<view class="item" @click="goFind_shoper">
				<image src="../../static/images/a5.png" mode=""></image>
				<view class="name">招商合作</view>
			</view>
			<view class="item" @click="goProblem_often">
				<image src="../../static/images/a6.png" mode=""></image>
				<view class="name">常见问题</view>
			</view>
			<view class="item" @click="goUserInfo">
				<image src="../../static/images/a7.png" mode=""></image>
				<view class="name">设置</view>
			</view>
			<view class="item" @click="goCallUs">
				<image src="../../static/images/a8.png" mode=""></image>
				<view class="name">联系我们</view>
			</view>
			<view class="item">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				rebateMoney:'',
				name:'',
				phone:'',
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
			console.log(this.token)
			if(!this.token){
				uni.navigateTo({
					url: '../login/login'
				})
				return 
			}
			uni.request({
				url: this.url + '/mobile/realData',
				method:'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token': this.token
				},
				data:{
					
				},
				success: (res) => {
					console.log(res);
					this.rebateMoney = res.data.rebateMoney+''
					this.name = res.data.name+''
					this.phone = res.data.tel+''
				}
			})
		},
		methods: {
			goCallUs(){
				uni.navigateTo({
					url: '../callUs/callUs'
				})
			},
			goCompany_recovery(){//跳转企业回收页面
				uni.navigateTo({
					url: '../company_recovery/company_recovery'
				})
			},
			goFind_shoper(){//跳转招商合作页面
				uni.navigateTo({
					url: '../find_shoper/find_shoper'
				})
			},
			goProblem_often(){//跳转常见问题页面
				uni.navigateTo({
					url: '../problem_often/problem_often'
				})
			},
			goInvite(){
				uni.navigateTo({
					url: '../invite/invite'
				});
			},
			goUserInfo(){//跳转个人信息页面
				uni.navigateTo({
					url: '../userInfo/userInfo'
				});
			},
			goAccount(){//跳转打款账户页面
				uni.navigateTo({
					url: '../account/account'
				});
			},
			goCommission(){//跳转佣金记录页面
				uni.navigateTo({
					url: '../commission/commission'
				});
			},
			goFeedback(){//跳转意见反馈页面
				uni.navigateTo({
					url: '../feedback/feedback'
				});
			},
			goRecord(){//跳转提现记录页面
				uni.navigateTo({
					url: '../record/record'
				});
			},
			goWithdrawDeposit(){//跳转体现页面
				uni.navigateTo({
					url: '../withdrawDeposit/withdrawDeposit'
				});
			}
		}
	}
</script>

<style>
	
	/* 底部九宫格样式 */
	.content{
		width: 90%;
		margin-left: 5%;
		margin-top: 30upx;
		height: 600upx;
		background-color: #fff;
	}
	.content .item{
		width: 33.3%;
		height: 200upx;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		float: left;
		box-sizing: border-box;
		text-align: center;
	}
	.content .item:nth-child(3),.content .item:nth-child(6),.content .item:nth-child(9){
		border-right: none;
	}
	.content .item:nth-child(7),.content .item:nth-child(8),.content .item:nth-child(9){
		border-bottom: none;
	}
	.content .item image{
		width: 80upx;
		height: 80upx;
		margin-top: 20upx;
	}
	
	page{
		background-color: #f2f2f2;
	}
	.background{
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 200upx;
		background-color: #6ac4c0;
	}
	.top{
		width: 90%;
		height: 360upx;
		margin-left: 5%;
		margin-top: 100upx;
		border-radius: 20upx;
		padding: 30upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.top .user{
		width: 100%;
		height: 200upx;
		padding-top: 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.top .user .img{
		width: 130upx;
		height: 130upx;
		border-radius: 50%;
		margin-right: 20upx;
		float: left;
		display: inline-block;
	}
	.top .user .img image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.top .middle{
		height: 100%;
		padding-top: 30upx;
		box-sizing: border-box;
		display: inline-block;
	}
	.top .middle .name .username{
		display: inline-block;
		margin-right: 25upx;
	}
	.top .middle .name image{
		width: 30upx;
		height: 30upx;
		display: inline-block;
	}
	.top .right{
		width: 160upx;
		height: 100%;
		float: right;
		display: inline-block;
	}
	.top .right .btn{
		width: 100%;
		height: 50upx;
		margin-top: 35upx;
		line-height: 50upx;
		text-align: center;
		border: 1px solid #c8332d;
		background-color: #fff;
		color: #c8332d;
		border-radius: 30upx;
	}
	.top .userMoney{
		width: 100%;
		height: 100upx;
	}
	.top .userMoney .left{
		display: inline-block;
		width: 50%;
		height: 100%;
		padding-top: 20upx;
		box-sizing: border-box;
	}
	.top .userMoney .left .name{
		font-size: 28upx;
		color: #4b4b4b;
		line-height: 40upx;
	}
	.top .userMoney .left .num{
		font-size: 36upx;
		color: #5b5b5b;
		line-height: 40upx;
	}
	.top .userMoney .right{
		display: inline-block;
		width: 50%;
		height: 100%;
	}
	.top .userMoney .right .withdraw-deposit{
		display: inline-block;
		width: 150upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		background-color: #6ac4c0;
		margin-top: 20upx;
		border-radius: 10upx;
		color: #fff;
	}
	.top .userMoney .right .record{
		display: inline-block;
		float: right;
		line-height: 100upx;
		color: #6ac4c0;
	}
</style>
