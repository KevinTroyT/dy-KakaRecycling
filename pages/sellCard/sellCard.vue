<template>
	<view>
		<view class="top">
			<view class="card1" @click="card1Click">
				<view class="name">卡类</view>
				<view class="card1Name">
					<view class="left">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1">
				<view class="name">卡种</view>
				<view class="card1Name">
					<view class="left">中国移动</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1">
				<view class="name">面值</view>
				<view class="card1Name">
					<view class="left">请选择面值</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1">
				<view class="name">回收价</view>
				<view class="card1Name">
					<view class="left"></view>
					
				</view>
			</view>
		</view>
		<view class="middle">
			<view class="left">获取方式</view>
			<view class="step">交易步骤</view>
			<view class="right">常见问题</view>
		</view>
		<view class="bottom">
			<view class="title">用户须知</view>
		</view>
		
		<!-- 卡类弹窗 -->
		<view class="card1-box" v-if="card1Show">
			<view class="title">请选择卡类</view>
			<image class="close" src="../../static/images/close.png" @click="card1Close" mode=""></image>
			<view class="cards-box">
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
				<view class="card-item">
					<view class="name">话费卡</view>
					<image src="../../static/images/cards1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view id="mask1" v-if="card1Show" @click="card1Close"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card1Show:false
			}
		},
		methods: {
			card1Click(){//卡类点击出现选择框
				this.card1Show = true
			},
			card1Close(){
				this.card1Show = false
			}
		}
	}
</script>

<style>
	
	.card1-box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 700upx;
		background-color: #fff;
		z-index: 99;
	}
	.card1-box .title{
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		font-size: 34upx;
	}
	.card1-box .close{
		width: 50upx;
		height: 50upx;
		position: absolute;
		right: 25upx;
		top: 25upx;
	}
	.card1-box .cards-box{
		width: 100%;
		height: 600upx;
		overflow-y: scroll;
	}
	.card1-box .cards-box .card-item{
		width: 100%;
		height: 150upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.card1-box .cards-box .card-item .name{
		font-size: 34upx;
		line-height: 150upx;
		float: left;
	}
	.card1-box .cards-box .card-item image{
		width: 100upx;
		height: 100upx;
		margin-top: 25upx;
		margin-right: 30upx;
		float: right;
	}
	#mask1{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5);
	}
	
	page{
		background-color: #f2f2f2;
	}
	.top{
		width: 100%;
		height: 400upx;
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.top .card1{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	.top .card1:last-child{
		border-bottom: none;
	}
	.top .card1 .name{
		display: inline-block;
		float: left;
		line-height: 100upx;
		width: 15%;
	}
	.top .card1 .card1Name{
		width: 70%;
		height: 100%;
		display: inline-block;
	}
	.top .card1 .card1Name .left{
		display: inline-block;
		line-height: 100upx;
		float: left;
	}
	.top .card1 .card1Name image{
		display: inline-block;
		margin-top: 20upx;
		width: 60upx;
		height: 60upx;
		float: right;
	}
	.top .card1 .right-icon{
		display: inline-block;
		float: right;
		width: 40upx;
		margin-top: 25upx;
		height: 50upx;
	}
	.top .card1 .right-icon image{
		width: 100%;
		height: 100%;
	}
	
	.middle{
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20upx 40upx;
		box-sizing: border-box;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	.middle>view{
		display: inline-block;
		width: 33.3%;
		height: 100%;
		line-height: 60upx;
		text-align: center;
	}
	.middle .step{
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	
	.bottom{
		width: 100%;
		height: 600upx;
		padding: 30upx 40upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.bottom .title{
		color: #d7362f;
		font-size: 30upx;
		height: 40upx;
		line-height: 40upx;
		padding-left: 10upx;
		border-left: 4px solid #d7362f;
	}
</style>
