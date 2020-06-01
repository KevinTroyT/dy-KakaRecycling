<template>
	<view class="information" v-if="noticeList.length > 0">
		<block v-for="(item,index) in noticeList" :key="index">
			<view class="item">
				<view class="title">
					<view class="item-left">
						<image src="../../static/images/information.png" mode=""></image>
						<view class="title-con">{{item.title}}</view>
					</view>
				</view>
				<view class="content">
					<view class="content-con">
						{{item.content}}
					</view>
					<view class="time">{{item.createTime}}</view>
				</view>
			</view>
		</block>
	</view>
	
	<view class="noInformation" v-else>
		<image src="../../static/images/lipinka (96).png" mode=""></image>
		<view>暂无消息</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeList:[],//公告列表
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
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
			this.src = this.url
			uni.request({
				url: this.url + '/mobile/noticeListPc',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Authorization':this.token
				},
				data:{
					
				},
				success: (res) => {
					console.log(res);
					this.noticeList = res.data.data.list
				}
			})
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
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		box-sizing: border-box;
	}
	.item .content .time{
		width: 100%;
		height: 50upx;
		text-align: right;
		font-size: 26upx;
		color: #909090;
	}
	.noInformation{
		width: 100%;
		margin-top: 320upx;
		text-align: center;
	}
	.noInformation image{
		width: 400upx;
		height: 320upx;
	}
	.noInformation view{
		font-size: 42upx;
		color: #ccc;
	}
</style>
