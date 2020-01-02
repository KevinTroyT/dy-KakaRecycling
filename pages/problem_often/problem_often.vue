<template>
	<view>
		<view class="content">
			<block v-for="(item,index) in list" :key="index">
				<view class="item">
					<view class="view-title" @click="change(index)">
						<view class="num">{{index+1}},</view>
						<view class="name">{{item.title}}</view>
						<image 
							src="../../static/images/right.png" 
							mode=""
							:class="{'select':item.show}"
						>
						</image>
					</view>
					<view class="item-box" v-if="item.show">
						<view class="box">{{item.content}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:'平台支持回收的闲置礼品卡有哪些？',
						content:'沃回收平台暂时只针对网站公布回收的礼品卡进行回收处理，目前支持回收的卡包括话费卡、加油卡、游戏卡、电商卡、商超卡、旅游卡等几十多种，如果没有您想要提交的卡，您可以联系客服，后期我们会逐步的发布更多的卡类回收，详情请参考网站公告。',
						show:false
					},
					{
						title:'名称后带有 "自动" 标志的卡需注意的问题！',
						content:'名称后面带有 "自动" 标志的卡种为自动结算形式回收，用户提交订单后最快几分钟内即可收到回收款。请提交前认真核对选择的面额，如实际面额与选择面额不符，将有可能给您带来损失！',
						show:false
					},
					{
						title:'平台支持回收的闲置礼品卡有哪些？',
						content:'沃回收平台暂时只针对网站公布回收的礼品卡进行回收处理，目前支持回收的卡包括话费卡、加油卡、游戏卡、电商卡、商超卡、旅游卡等几十多种，如果没有您想要提交的卡，您可以联系客服，后期我们会逐步的发布更多的卡类回收，详情请参考网站公告。',
						show:false
					},
					{
						title:'哪些礼品卡不支持回收？',
						content:'凡是已使用的卡、偷盗卡、非正常渠道获得的卡以及网站上没有的卡种我们都不回收。',
						show:false
					},
					{
						title:'回收放款需要多少时间？',
						content:'1，含有"自动"标志的卡种为自动结算形式回收，一般情况30分钟内可以处理完成，最快可以在几分钟内处理完成（特殊情况除外）。2，未含有"自动"标志的卡种需要平台工作人员手动处理，一般在1个工作日内处理完成，部分卡种可能需要1-2个工作日方能处理完成。',
						show:false
					},
					{
						title:'电子卡与实体卡区别？',
						content:'实体卡是实物，是一张卡片的形式，卡的背面有卡号和密码；电子卡是虚拟的，是通过网上在线购买获取卡号和密码的；实体卡和电子卡在我们这回收的时候都是一样的。',
						show:false
					},
					{
						title:'提交面值与实际面值不一致，怎么办？',
						content:'提交面值与实际面值不一致，将给您带来损失，请务必仔细核对后再提交。若提交的面值小于实际面值，如：提交的面值为100元，卡密实际面值为200元，则按100元结算。若提交的面值大于实际面值，如：提交的面值为200元，卡密实际面值为100元，则不结算。',
						show:false
					}
				]
			}
		},
		methods: {
			change(index){
				let state = this.list[index].show
				for(let i = 0 ; i < this.list.length ; i++){
					this.list[i].show = false
				}
				this.list[index].show = !state
			}
		}
	}
</script>

<style>
	page{
		background-color: #f2f2f2;
		padding: 30upx;
		box-sizing: border-box;
	}
	.content{
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.item{
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.item .view-title{
		width: 100%;
		height: 100upx;
	}
	.item .view-title>view{
		display: inline-block;
		line-height: 100upx;
	}
	.item .view-title .num{
		float: left;
		margin-right: 20upx;
	}
	.item .view-title .name{
		float: left;
		font-size: 26upx;
	}
	.item .view-title image{
		width: 40upx;
		height: 40upx;
		margin-top: 30upx;
		margin-right: 30upx;
		float: right;
	}
	.item .view-title .select{
		transform: rotate(90deg);
	}
	.item .item-box{
		width: 100%;
		padding: 10upx 20upx;
		box-sizing: border-box;
	}
	.item .item-box .box{
		width: 100%;
		background-color: #ccc;
		padding: 10upx;
		box-sizing: border-box;
		font-size: 26upx;
		margin-bottom: 20upx;
	}
</style>
