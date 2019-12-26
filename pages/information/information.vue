<template>
	<view class="information">
		<view class="item">
			<view class="title">
				<view class="item-left">
					<image src="../../static/images/information.png" mode=""></image>
					<view class="title-con">我的消息</view>
				</view>
				<view class="item-right">
					<image src="../../static/images/lipinka (88).png" mode=""></image>
				</view>
			</view>
			<view class="content">
				<view class="content-con">
					欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!
				</view>
				<view class="time">2019-03-03 10:00</view>
			</view>
		</view>
		<view class="item">
			<view class="title">
				<view class="item-left">
					<image src="../../static/images/information.png" mode=""></image>
					<view class="title-con">我的消息</view>
				</view>
				<view class="item-right">
					<image src="../../static/images/lipinka (88).png" mode=""></image>
				</view>
			</view>
			<view class="content">
				<view class="content-con">
					欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!
				</view>
				<view class="time">2019-03-03 10:00</view>
			</view>
		</view>
		<view class="item">
			<view class="title">
				<view class="item-left">
					<image src="../../static/images/information.png" mode=""></image>
					<view class="title-con">我的消息</view>
				</view>
				<view class="item-right">
					<image src="../../static/images/lipinka (88).png" mode=""></image>
				</view>
			</view>
			<view class="content">
				<view class="content-con">
					欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!
				</view>
				<view class="time">2019-03-03 10:00</view>
			</view>
		</view>
		<view class="item">
			<view class="title">
				<view class="item-left">
					<image src="../../static/images/information.png" mode=""></image>
					<view class="title-con">我的消息</view>
				</view>
				<view class="item-right">
					<image src="../../static/images/lipinka (88).png" mode=""></image>
				</view>
			</view>
			<view class="content">
				<view class="content-con">
					欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!欢迎使用卡卡回收APP!
				</view>
				<view class="time">2019-03-03 10:00</view>
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
			
		}
	}
</script>

<style>
	page{
		background-color: #e6e6e6;
	}
	.information{
		padding: 30upx;
	}
	.item{
		width: 100%;
		height: 300upx;
		padding: 20upx 30upx;
		margin-bottom: 30upx;
		border-radius: 10upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.item .title{
		width: 100%;
		height: 50upx;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
	.item .title .item-left{
		float: left;
		display: inline-block;
	}
	.item .title .item-left image{
		float: left;
		width: 40upx;
		height: 40upx;
		display: inline-block;
	}
	.item .title .item-left .title-con{
		float: left;
		margin-left: 10upx;
		line-height: 50upx;
		display: inline-block;
	}
	.item .title .item-right{
		float: right;
		width: 35upx;
		height: 20upx;
	}
	.item .title .item-right image{
		width: 100%;
		height: 100%;
	}
	.item .content{
		width: 100%;
		height: 210upx;
	}
	.item .content .content-con{
		width: 100%;
		height: 160upx;
		padding-top: 15upx;
		box-sizing: border-box;
	}
	.item .content .time{
		width: 100%;
		height: 50upx;
		text-align: right;
		font-size: 26upx;
		color: #909090;
	}
</style>
