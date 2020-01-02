<template>
	<view>
		<view class="logo">
			<image src="../../static/images/logo.png" mode=""></image>
			<view class="logo-name">卡卡回收</view>
		</view>
		<view class="box">
			<view class="item">
				<view class="name">微信公众号</view>
				<view class="item-con">卡卡回收</view>
			</view>
		</view>
		<view class="box">
			<view class="item">
				<view class="name">客服微信</view>
				<view class="item-con">{{kfwx}}</view>
				<image src="../../static/images/copy.png" @click="copy1" mode=""></image>
			</view>
		</view>
		<view class="box">
			<view class="item">
				<view class="name">商务QQ</view>
				<view class="item-con">{{swqq}}</view>
				<image src="../../static/images/copy.png" @click="copy2" mode=""></image>
			</view>
		</view>
		<view class="box">
			<view class="item">
				<view class="name">客服电话</view>
				<view class="item-con">{{tell}}</view>
				<image src="../../static/images/copy.png" @click="copy3" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kfwx:'zzxw819',
				swqq:'1745627679',
				tell:'4006-858-258',
			}
		},
		methods: {
			copy1(){
				uni.setClipboardData({
					data:this.kfwx,
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
			},
			copy2(){
				uni.setClipboardData({
					data:this.swqq,
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
			},
			copy3(){
				uni.setClipboardData({
					data:this.tell,
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
		background-color: #f2f2f2;
	}
	.logo{
		width: 100%;
		text-align: center;
	}
	.logo image{
		width: 150upx;
		height: 150upx;
		border-radius: 20upx;
		margin-top: 80upx;
	}
	.logo .logo-name{
		font-size: 30upx;
		line-height: 60upx;
	}
	.box{
		width: 100%;
	}
	.box .item{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		padding: 0 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f2f2f2;
	}
	.box .item>view{
		display: inline-block;
		text-align: left;
		line-height: 100upx;
		float: left;
	}
	.box .item .name{
		width: 25%;
	}
	.box .item image{
		width: 40upx;
		height: 40upx;
		float: right;
		margin-top: 30upx;
		margin-right: 30upx;
	}
</style>
