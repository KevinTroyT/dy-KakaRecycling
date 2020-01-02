<template>
	<view>
		<view class="card">
			<view class="title">账户余额将提现到打款账户</view>
			<view class="money"><view style="display: inline-block;">￥</view><input type="number" v-model="money"></view>
			<view class="bottom">
				<view class="left">账户余额:</view>
				<view class="num">￥{{Number(rebateMoney).toFixed(1)}}</view>
			</view>
		</view>
		<button class="commit" @click="commit">提现到支付宝</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:'',
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				rebateMoney:'',
			}
		},
		onShow(){
			this.token = uni.getStorageSync('token')
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
				}
			})
		},
		methods: {
			commit(){
				let _this = this
				if(this.money == ''){
					uni.showModal({
						title: '提现',
						content:'请输入提现金额'
					})
					return false
				}else if(this.money <= 0){
					uni.showModal({
						title: '提现',
						content:'提现金额需大于0'
					})
					return false
				}
				let reg = /^[0-9]{1,9}\.{0,1}\d{0,1}$/
				if(!reg.test(this.money)){
					uni.showModal({
						title: '提现',
						content:'提现金额最多保留一位小数'
					})
					return false
				}else{
					uni.request({
						url: this.url + '/mobile/withdrawDeposit',
						method:'GET',
						header: {
							'content-type': 'application/x-www-form-urlencoded' ,// 默认值
							'token': this.token
						},
						data:{
							amount:this.money
						},
						success: (res) => {
							console.log(res);
							if(res.data.result){
								uni.showToast({
									title: '提现成功',
									duration: 2000,
									success:function(){
										_this.money = ''
										uni.request({
											url: _this.url + '/mobile/realData',
											method:'GET',
											header: {
												'content-type': 'application/x-www-form-urlencoded' ,// 默认值
												'token': _this.token
											},
											data:{
												
											},
											success: (res) => {
												console.log(res);
												_this.rebateMoney = res.data.rebateMoney+''
											}
										})
									}
								});
							}else{
								uni.showToast({
									title: res.data.msg,
									duration: 2000,
									icon:'none'
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
	page{
		background-color: #f2f2f2;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.card{
		width: 100%;
		height: 400upx;
		border-radius: 20upx;
		padding: 20upx 30upx;
		box-sizing: border-box;
		box-shadow: 0 0 10upx #ccc;
		background-color: #fff;
	}
	.card .title{
		font-size: 34upx;
		color: #7d838c;
	}
	.card .money{
		padding-top: 20upx;
		box-sizing: border-box;
	}
	.card .money>view{
		font-size: 75upx;
		height: 120upx;
		line-height: 120upx;
		float: left;
		border-bottom: 1px solid #f2f2f2;
		color: #000;
	}
	.card .money input{
		height: 120upx;
		width: 50%;
		line-height: 120upx;
		font-size: 75upx;
		display: inline-block;
	}
	.card .bottom{
		width: 100%;
		height: 80upx;
		margin-top: 40upx;
	}
	.card .bottom .left{
		font-size: 32upx;
		float: left;
		color: #7d838c;
		margin-right: 20upx;
		line-height: 80upx;
		display: inline-block;
	}
	.card .bottom .num{
		font-size: 32upx;
		float: left;
		color: #7d838c;
		line-height: 80upx;
		display: inline-block;
	}
	.commit{
		width: 100%;
		height: 100upx;
		border-radius: 50upx;
		background-color: #e89439;
		color: #fff;
		margin-top: 500upx;
	}
</style>
