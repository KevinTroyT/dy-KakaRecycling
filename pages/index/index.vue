<template>
	<view class="index">
		<view class="top-title">
			<view class="content">沃回收</view>
		</view>
		<view class="carousel">
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<block v-for="(item,index) in slideshowImg" :key="index">
								<swiper-item>
								    <image class="swiperImg" :src="item.path" mode=""></image>
								</swiper-item>
							</block>
			            </swiper>
			        </view>
			    </view>
			</view>
		</view>
		<view class="cards">
			<view class="title">-专业礼品卡回收-</view>
			<view class="cardsBox">
				<block v-for="(item,index) in listLength" :key="index">
					<view class="list">
						<view class="item" @click="goSellCard1(index)">
							<image :src="commodityClass[index*2].logo" mode=""></image>
							<view class="name">{{commodityClass[index*2].name}}</view>
						</view>
						<view class="item" @click="goSellCard2(index)">
							<image :src="commodityClass[index*2+1].logo" mode=""></image>
							<view class="name">{{commodityClass[index*2+1].name}}</view>
						</view>
					</view>
				</block>
				
			</view>
		</view>
		<view class="uni-padding-wrap" style="width: 100%;height: 80upx;position: relative;box-sizing: border-box;">
			<view class="page-section swiper" style="width: 100%;height: 80upx;">
			    <view class="page-section-spacing" style="width: 100%;height: 80upx;">
			        <swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" style="width: 90%;height: 80upx;float: right;color:#777">
						<block v-for="(item,index) in notes" :key="index">
							<swiper-item style="width: 100%;height: 80upx;line-height: 80upx;">
							    <view style="line-height: 80upx;">{{item.title}}</view>
							</swiper-item>
						</block>
			        </swiper>
			    </view>
			</view>
			<view class="_position display_row">
				<image class="imgs notice" src="../../static/images/notice.png" mode=""></image>
			</view>
		</view>
		<view class="blank"></view>
		<view class="hot">
			<view class="title">-热门回收-</view>
			<view class="hotCards">
				<block v-for="(item,index) in hotCommodityList" :key="index">
					<view class="hotItem" @click="goSellCard(item.classId,item.id,item.hasCardNumber)">
						<view class="item-top">
							<image :src="item.imgPath" mode=""></image>
							<view class="name">{{item.name}}</view>
						</view>
						<view class="item-bottom">
							<view class="price">{{item.discount*10}}折回收</view>
						</view>
					</view>
				</block>
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
				},
				src:'',
				slideshowImg:[],//轮播图数组
				commodityClass:[],//卡类数组
				listLength:0,
				notes:[],//公告数组
				hotCommodityList:[],//热门回收数组
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
			}
		},
		onShow(){
			this.src = this.url
			this.token = uni.getStorageSync('token')
			uni.request({
				url: this.url + '/mobile/indexData',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
				},
				data:{
					type:2
				},
				success: (res) => {
					console.log(res);
					this.slideshowImg = res.data.data.slideshowImg
					this.notes = res.data.data.notes
					this.hotCommodityList = res.data.data.hotCommodityList
					this.commodityClass = res.data.data.commodityClass
					this.listLength = Math.ceil(this.commodityClass.length/2)
					console.log(this.listLength)
				}
			})
		},
		onLoad() {

		},
		methods: {
			scroll(e){
			    console.log(e)
			    this.old.scrollTop = e.detail.scrollTop
			},
			goSellCard(fid,id,hasCardNumber){
				uni.setStorageSync('card1Id',fid)
				uni.setStorageSync('card2Id',id)
				uni.setStorageSync('hasCardNumber',hasCardNumber)
				uni.navigateTo({
					url: '../sellCard/sellCard'
				});
			},
			goSellCard1(index){
				console.log(index)
				uni.setStorageSync('card1Id',this.commodityClass[index*2].id)
				uni.navigateTo({
					url: '../sellCard/sellCard'
				});
			},
			goSellCard2(index){
				console.log(index)
				uni.setStorageSync('card1Id',this.commodityClass[index*2+1].id)
				uni.navigateTo({
					url: '../sellCard/sellCard'
				});
			}
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
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
		border-bottom: #eee 1upx solid;
	}
	.cards .cardsBox .list{
		width: 33%;
		height: 100%;
		/* float: left; */
		display: inline-block;
	}
	.cards .cardsBox .list .item{
		width: 100%;
		height: 200upx;
		padding: 0 5%;
		float: left;
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
		width: 100upx;
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
		position: relative;
		width: 40%;
		padding: 0 4%;
		float: left;
		margin-bottom: 30upx;
		height: 200upx;
		box-sizing: border-box;
		display: inline-block;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 4px;
		box-shadow: 0 2upx 3px 0 rgba(0, 0, 0, 0.2), 0 4upx 10upx 0 rgba(0, 0, 0, 0.19);
		margin-left:50upx;
		background: linear-gradient(to right, rgb(245, 126, 132), rgb(249, 70, 92));
	}
	.hot .hotCards .hotItem:nth-child(4n+1)
	,.hot .hotCards .hotItem:nth-child(4n+2){
		background: linear-gradient(to right, rgb(83, 158, 251), rgb(39, 112, 217));
	}
	.hot .hotCards .hotItem .item-top{
		text-align: center;
		padding-top: 30upx;
		color:#fff
	}
	.hot .hotCards .hotItem .item-bottom{
		position: absolute;
		width: 100%;
		height: 30%;
		bottom: 0;
		left: 0;
		background-color: #fff;
		border-top: 1px #eee solid;
		text-align: center;
	}
	.hot .hotCards .hotItem .item-bottom .price{
		font-size: 30upx;
		color: #909090;
	}
	.hot .hotCards .hotItem .item-right{
		width: 45%;
		height: 100upx;
	}
	.hot .hotCards .hotItem .item-top image{
		width: 50upx;
		height: 50upx;
		float: left;
		margin-left: 25upx;
		margin-right: -25upx;
	}
	.notice{
		width: 100%;
		height: 45%;
		margin-left: 10px;
	}
	.blank{
		width: 100%;
		height: 10px;
		background-color: #eee;
	}
</style>
