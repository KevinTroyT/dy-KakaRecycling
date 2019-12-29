<template>
	<view class="index-list">
		<view class="listItem" @click="goSellCard(item.classId,item.id)">
			<view class="item-img">
				<image :src="src+item.imgPath" mode=""></image>
			</view>
			<view class="item-right">
				<view class="name">{{item.name}}</view>
				<view class="faceValue">{{(item.discount*10).toFixed(1)}}折</view>
			</view>
			<view class="right-box">
				<image class="right-arrows" src="../../static/images/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number,
			src:String
		},
		methods:{
			goSellCard(fid,id){
				uni.setStorageSync('card1Id',fid)
				uni.setStorageSync('card2Id',id)
				uni.navigateTo({
					url: '../sellCard/sellCard'
				});
			}
		}
	}
</script>

<style>
	page{
		background-color: #e6e6e6;
	}
	.index-list{
		width: 100%;
		height: 200upx;
		padding: 17upx 20upx;
		box-sizing: border-box;
	}
	.index-list .listItem{
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #fff;
		padding: 20upx 20upx;
		box-sizing: border-box;
		box-shadow: 3px 3px 2px #ccc;
	}
	.index-list .listItem .right-box{
		width: 70upx;
		height: 70upx;
		background-color: #dbdbdb;
		border-radius: 50%;
		position: absolute;
		right: 20upx;
		top: 50%;
		margin-top: -35upx;
		padding: 16upx;
		box-sizing: border-box;
	}
	.index-list .listItem .right-arrows{
		width: 100%;
		height: 100%;
	}
	.index-list .listItem .item-img{
		width: 130upx;
		height: 130upx;
		float: left;
		display: inline-block;
	}
	.index-list .listItem .item-img image{
		width: 100%;
		height: 100%;
	}
	.index-list .listItem .item-right{
		width: 78%;
		float: right;
		display: inline-block;
	}
	.index-list .listItem .item-right .faceValue{
		font-size: 26upx;
		color: red;
	}
	.index-list .listItem .item-right .name{
		line-height: 70upx;
	}
</style>
