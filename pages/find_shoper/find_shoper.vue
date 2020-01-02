<template>
	<view>
		<view class="top">
			<image src="../../static/images/bg_1.jpg" class="backgroundImg" mode=""></image>
		</view>
		<view class="middle">
			<view class="content">
				诚邀各界大神与我们合作，如各位拥有相应资源或者有其他想法与资源，都可以与我们商务洽谈。
			</view>
		</view>
		<view class="bottom">
			<view class="item">
				<view class="item-box">
					<image src="../../static/images/lipinka (64).png" mode=""></image>
					<view class="name">一对一的服务</view>
					<view class="line"></view>
					<view class="item-con">我们出色的专业服务团队  确保交易安全放心满意</view>
				</view>
			</view>
			<view class="item">
				<view class="item-box">
					<image src="../../static/images/lipinka (64).png" mode=""></image>
					<view class="name">交易方式多样</view>
					<view class="line"></view>
					<view class="item-con">我们提供线上线下  多种交易方式</view>
				</view>
			</view>
			<view class="item">
				<view class="item-box">
					<image src="../../static/images/lipinka (64).png" mode=""></image>
					<view class="name">种类丰富 卡券齐全</view>
					<view class="line"></view>
					<view class="item-con">提供采购类型覆盖线上线下等几十种礼品卡券</view>
				</view>
			</view>
			<view class="item">
				<view class="item-box">
					<image src="../../static/images/lipinka (64).png" mode=""></image>
					<view class="name">采购价格优惠</view>
					<view class="line"></view>
					<view class="item-con">我们提供大量礼品卡比市面价格公道实惠</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goCallUs(){
				uni.navigateTo({
					url: '../callUs/callUs'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f2f2f2;
	}
	.top{
		position: relative;
		width: 100%;
		height: 400upx;
	}
	.top .backgroundImg{
		width: 100%;
		height: 100%;
	}
	.top-wenzi{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
	}
	.top-wenzi image{
		width: 80%;
		height: 120upx;
		margin-top: 40upx;
		margin-bottom: 30upx;
	}
	.top-wenzi .con1{
		color: #fff;
		font-size: 32upx;
	}
	.top-wenzi .wenzi-btn{
		display: inline-block;
		border: 1px solid #fff;
		color: #fff;
		margin-top: 20upx;
		padding: 10upx 30upx;
		box-sizing: border-box;
		border-radius: 60upx;
		font-size: 34upx;
	}
	.middle{
		width: 100%;
		padding: 0 30upx;
		margin-top: 30upx;
		box-sizing: border-box;
	}
	.middle .content{
		width: 100%;
		background-color: #fff;
		text-align: center;
		font-size: 28upx;
	}
	.bottom{
		width: 100%;
		padding: 0 10upx;
		box-sizing: border-box;
	}
	.bottom .item{
		width: 50%;
		height: 330upx;
		padding: 10upx;
		float: left;
		box-sizing: border-box;
	}
	.bottom .item .item-box{
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 15upx 20upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.bottom .item .item-box image{
		width: 100upx;
		height: 100upx;
	}
	.bottom .item .item-box .name{
		font-size: 30upx;
		line-height: 40upx;
	}
	.bottom .item .item-box .line{
		display: inline-block;
		width: 20%;
		height: 6upx;
		background-color: #35BBB4;
	}
	.bottom .item .item-box .item-con{
		font-size: 22upx;
	}
</style>
