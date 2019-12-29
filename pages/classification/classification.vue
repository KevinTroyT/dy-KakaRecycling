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
								<index-list :item="item" :src="src" :index="index"></index-list>
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
				tabBars:[],
				newsList:[],
				src:'',
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
			}
		},
		onShow(){
			let _this = this
			this.src = this.url
			this.token = uni.getStorageSync('token')
			uni.request({
				url: this.url + '/mobile/classificationData',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token':this.token
				},
				data:{
					type:2
				},
				success: (res) => {
					console.log(res);
					this.tabBars = res.data.data.classList
					this.tabBars.forEach(function(value,index){
						_this.newsList[index] = {
							list:[]
						}
					})
					this.newsList[0].list = res.data.data.commodityList
				}
			})
		},
		methods: {
			tabClick(index){//顶部tabBar点击事件
				this.tabIndex = index
				console.log(this.tabIndex)
			},
			tabChange(e){//滑动切换页面
				uni.request({
					url: this.url + '/mobile/cardListData',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token':this.token
					},
					data:{
						type:2,
						commodityClassId:this.tabBars[e.detail.current].id
					},
					success: (res) => {
						console.log(res);
						this.newsList[e.detail.current].list = res.data.data
						this.tabIndex = e.detail.current
					}
				})
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
