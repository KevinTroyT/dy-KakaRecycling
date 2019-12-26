<template>
	<view>
		<view>
			<view class="uni-tab-bar" style="background-color: #fff;">
				<scroll-view scroll-x class="uni-swiper-tab" style="border-bottom: none;">
					<block v-for="(tab,index) in tabBars" :key="tab.id">
						<view 
							class="swiper-tab-list" 
							:class="{'active':tabIndex == index}"
							@click="tabClick(index)"
						>
							{{tab.name}}
						</view>
					</block>
				</scroll-view>
			</view>
			<view class="uni-tab-bar">
				<swiper 
					class="swiper-box" 
					:style="{'height':swiperHeight+'px'}"
					:current="tabIndex"
					@change="tabChange"
				>
					<swiper-item v-for="(items,indexs) in newsList" :key="indexs">
						<scroll-view scroll-y class="list">
							<block v-for="(item,index) in items.list" :key="index">
								<index-list :item="item" :index="index"></index-list>
							</block>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue"
	export default {
		components:{
			indexList
		},
		data() {
			return {
				swiperHeight:573,
				tabIndex:0,
				tabBars:[
					{name:'话费卡',id:'guanzhu'},
					{name:'加油卡',id:'tuijian'},
					{name:'游戏卡',id:'tiyu'},
					{name:'电商卡',id:'redian'},
					{name:'出行券',id:'caijing'},
					{name:'美食券',id:'yule'},
					{name:'影音券',id:'yinying'},
					{name:'积分兑',id:'jifen'},
				],
				newsList:[
					{
						list:[
							{
								path:"../../static/images/cards1.png",
								name:"苏宁易购礼品卡",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards2.png",
								name:"中粮集团折扣卡",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards1.png",
								name:"1号店礼品卡",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards1.png",
								name:"国美电器红券",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards1.png",
								name:"苏宁易购礼品卡",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards1.png",
								name:"苏宁易购礼品卡",
								faceValue:"98折"
							},
							{
								path:"../../static/images/cards1.png",
								name:"国美电器红券",
								faceValue:"98折"
							},
						]
					},
					{
						list:[]
					},
					{
						list:[]
					},
					{
						list:[]
					},
					{
						list:[]
					},
					{
						list:[]
					},
					{
						list:[]
					},
					{
						list:[]
					}
				],
			}
		},
		methods: {
			tabClick(index){//顶部tabBar点击事件
				this.tabIndex = index
			},
			tabChange(e){//滑动切换页面
				this.tabIndex = e.detail.current
			}
		},
		onLoad(){
			uni.getSystemInfo({
			    success:(res)=>{//es5语法不生效
			        console.log(res.windowHeight);
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperHeight = height
			    }
			});
		},
	}
</script>

<style>
	.uni-tab-bar .swiper-tab-list{
		width: 130upx;
		border-radius: 40upx;
		margin: 0 10upx;
	}
	.active{
		color: #fff !important;
		background-color: #F18F02;
	}
</style>
