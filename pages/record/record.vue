<template>
	<view>
		<view class="top">
			<view class="box">
				<block v-for="(i,index) in item" :key="index">
					<view 
						@click="change(index)"
						:class="{'active':current==index}"
					>
						{{i}}
					</view>
				</block>
			</view>
		</view>
		<view class="content">
			<view class="item">
				<view class="money">
					<view class="name">申请提现</view>
					<view class="num">+600.00</view>
				</view>
				<view class="time">
					<view class="name">申请时间</view>
					<view class="num">2019-02-23 15:18:20</view>
				</view>
				<view class="state">
					<view class="name">申请状态</view>
					<view class="num">提现中</view>
				</view>
			</view>
			<view class="item">
				<view class="money">
					<view class="name">申请提现</view>
					<view class="num">+600.00</view>
				</view>
				<view class="time">
					<view class="name">申请时间</view>
					<view class="num">2019-02-23 15:18:20</view>
				</view>
				<view class="state">
					<view class="name">申请状态</view>
					<view class="num">提现中</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:['体现中','已提现'],
				current:0,
			}
		},
		methods: {
			change(index){
				this.current = index
			}
		}
	}
</script>

<style>
	page{
		background-color: #fcfcfc;
	}
	.top{
		width: 100%;
		height: 100upx;
	}
	.top .box{
		width: 50%;
		height: 80upx;
		margin-left: 25%;
		margin-top: 10upx;
	}
	.top .box>view{
		display: inline-block;
		width: 50%;
		line-height: 80upx;
		font-size: 34upx;
		color: #ccc;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #ccc;
		background-color: #fff;
	}
	.top .box>view:nth-child(1){
		border-right: none;
		border-radius:20upx 0 0 20upx;
	}
	.top .box>view:nth-child(2){
		border-left: none;
		border-radius:0 20upx 20upx 0;
	}
	.top .box .active{
		background-color: #e89439;
		color: #fff;
	}
	
	.content{
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.content .item{
		width: 100%;
		height: 250upx;
		padding: 0 15upx;
		margin-top: 40upx;
		box-shadow: 0upx 0upx 20upx #ccc;
		box-sizing: border-box;
		background-color: #fff;
	}
	.item .money,.item .time,.item .state{
		width: 100%;
		height: 60upx;
	}
	.item .money .name{
		color: #333;
	}
	.item .money .num{
		color: #e89439;
	}
	.item .name{
		color: #7b7b7b;
		display: inline-block;
		float: left;
		line-height: 60upx;
		font-size: 33upx;
	}
	.item .num{
		color: #7b7b7b;
		display: inline-block;
		float: right;
		line-height: 60upx;
		font-size: 33upx;
	}
</style>
