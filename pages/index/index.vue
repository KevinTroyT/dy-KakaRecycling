<template>
	<view class="index">
		<view class="top-title">
			<view class="content">沃回收</view>
			<image src="../../static/images/search.png" mode=""></image>
		</view>
		<view class="carousel">
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                <swiper-item>
			                    <image class="swiperImg" src="../../static/images/lipinka.jpg" mode=""></image>
			                </swiper-item>
			            </swiper>
			        </view>
			    </view>
			</view>
		</view>
		<view class="cards">
			<view class="title">-专业礼品卡回收-</view>
			<view class="cardsBox">
				<view class="list">
					<view class="item">
						<image src="../../static/images/lipinka (52).png" mode=""></image>
						<view class="name">话费卡</view>
					</view>
					<view class="item">
						<image src="../../static/images/lipinka (54).png" mode=""></image>
						<view class="name">加油卡</view>
					</view>
				</view>
				<view class="list">
					<view class="item">
						<image src="../../static/images/lipinka (52).png" mode=""></image>
						<view class="name">话费卡</view>
					</view>
					<view class="item">
						<image src="../../static/images/lipinka (54).png" mode=""></image>
						<view class="name">加油卡</view>
					</view>
				</view>
				<view class="list">
					<view class="item">
						<image src="../../static/images/lipinka (52).png" mode=""></image>
						<view class="name">话费卡</view>
					</view>
					<view class="item">
						<image src="../../static/images/lipinka (54).png" mode=""></image>
						<view class="name">加油卡</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap" style="width: 100%;height: 80upx;position: relative;">
			<view class="page-section swiper" style="width: 100%;height: 80upx;">
			    <view class="page-section-spacing" style="width: 100%;height: 80upx;">
			        <swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" style="width: 80%;height: 80upx;float: right;">
			            <swiper-item style="width: 100%;height: 80upx;line-height: 80upx;">
			                <view style="line-height: 80upx;">我是公告</view>
			            </swiper-item>
						<swiper-item style="width: 100%;height: 80upx;line-height: 80upx;">
						    <view style="line-height: 80upx;">我是公告1</view>
						</swiper-item>
						<swiper-item style="width: 100%;height: 80upx;line-height: 80upx;">
						    <view style="line-height: 80upx;">我是公告2</view>
						</swiper-item>
			        </swiper>
			    </view>
			</view>
			<view class="_position display_row">
				<image class="imgs" src="../../static/images/notice.png" mode=""></image>
			</view>
		</view>
		<view class="integral">
			<view class="title">-积分兑换-</view>
			<view class="integralBox">
				<view class="itemCard">
					<image src="../../static/images/integral.png" mode=""></image>
				</view>
				<view class="itemCard">
					<image src="../../static/images/integral.png" mode=""></image>
				</view>
				<view class="itemCard">
					<image src="../../static/images/integral.png" mode=""></image>
				</view>
				<view class="itemCard">
					<image src="../../static/images/integral.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="hot">
			<view class="title">-热门回收-</view>
			<view class="hotCards">
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
				<view class="hotItem">
					<view class="item-left">
						<view class="name">中国移动</view>
						<view class="price">96.8折回收</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/hot.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				scrollTop: 0,
				old: {
				    scrollTop: 0
				}
			}
		},
		onLoad() {

		},
		methods: {
			scroll(e){
			    console.log(e)
			    this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>
	/* 顶部fixed */
	.top-title{
		width: 100%;
		height: 100upx;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 999;
	}
	.top-title .content{
		width: 100%;
		text-align: center;
		line-height: 100upx;
		font-size: 40upx;
		color: #333;
	}
	.top-title image{
		width: 50upx;
		height: 50upx;
		position: absolute;
		right: 25upx;
		top: 25upx;
	}
	/* 轮播图 */
	.carousel{
		margin-top: 100upx;
		width: 100%;
		height: 300upx;
	}
	.carousel .swiperImg{
		width: 100%;
		height: 100%;
	}
	/* 卡类图片 */
	.cards{
		width: 100%;
		height: 520upx;
	}
	.cards .title{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 34upx;
	}
	.cards .cardsBox{
		width: 100%;
		height: 400upx;
	}
	.cards .cardsBox .list{
		width: 33%;
		height: 100%;
		float: left;
	}
	.cards .cardsBox .list .item{
		width: 100%;
		height: 200upx;
		padding: 0 5%;
	}
	.cards .cardsBox .list .item image{
		width: 90%;
		height: 130upx;
	}
	.cards .cardsBox .list .item .name{
		width: 100%;
		text-align: center;
	}
	/* 公告 */
	._position {
		position: absolute;
		top: 0;
		left: 0;
		width: 160upx;
		height: 80upx;
	}
	.imgs {
		width: 100%;
		height: 100%;
	}
	.display_row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	/* 积分兑换 */
	.integral{
		width: 100%;
		height: 220upx;
		margin-bottom: 50upx;
	}
	.integral .title{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 34upx;
	}
	.integral .integralBox{
		width: 100%;
		height: 140upx;
		float: left;
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
	}
	.integral .integralBox .itemCard{
		width: 50%;
		height: 100%;
		display: inline-block;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.integral .integralBox .itemCard image{
		width: 300upx;
		height: 100%;
	}
	
	/* 热门回收 */
	.hot{
		width: 100%;
	}
	.hot .title{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 34upx;
	}
	.hot .hotCards{
		width: 100%;
	}
	.hot .hotCards .hotItem{
		width: 50%;
		height: 100upx;
		padding: 0 4%;
		margin-bottom: 30upx;
		box-sizing: border-box;
		display: inline-block;
	}
	.hot .hotCards .hotItem .item-left{
		float: left;
		width: 50%;
		height: 100%;
		text-align: right;
	}
	.hot .hotCards .hotItem .item-left .price{
		font-size: 30upx;
		color: #909090;
	}
	.hot .hotCards .hotItem .item-right{
		float: right;
		width: 45%;
		height: 100%;
	}
	.hot .hotCards .hotItem .item-right image{
		width: 100%;
		height: 100%;
	}
</style>
