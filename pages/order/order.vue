<template>
	<view>
		<view class="top">
			<block
				v-for="(i,index) in item"
				:key="index"
			>
				<view @click="change(index)" :class="current == index ? 'active' : ''">{{i}}</view>
			</block>
		</view>
		
		<view class="content">
			<view class="item">
				<view class="item-top">
					<view class="left">
						<view class="name">交易编号:</view>
						<view class="num">549564319852315</view>
					</view>
					<view class="right">￥98</view>
				</view>
				<view class="item-content">
					<view class="img">
						<image src="../../static/images/cards1.png" mode=""></image>
					</view>
					<view class="cardNum">
						<view class="i">
							<view class="name">名称:</view>
							<view class="con">一号店礼品卡</view>
							<view class="state">处理中</view>
						</view>
						<view class="i">
							<view class="name">卡号:</view>
							<view class="con">K9468211239</view>
						</view>
						<view class="i">
							<view class="name">卡密:</view>
							<view class="con">813595654111239</view>
						</view>
					</view>
				</view>
				<view class="item-bottom">2018-05-26 18:30:45</view>
			</view>
			<view class="item">
				<view class="item-top">
					<view class="left">
						<view class="name">交易编号:</view>
						<view class="num">549564319852315</view>
					</view>
					<view class="right">￥98</view>
				</view>
				<view class="item-content">
					<view class="img">
						<image src="../../static/images/cards1.png" mode=""></image>
					</view>
					<view class="cardNum">
						<view class="i">
							<view class="name">名称:</view>
							<view class="con">一号店礼品卡</view>
							<view class="state">处理中</view>
						</view>
						<view class="i">
							<view class="name">卡号:</view>
							<view class="con">K9468211239</view>
						</view>
						<view class="i">
							<view class="name">卡密:</view>
							<view class="con">813595654111239</view>
						</view>
					</view>
				</view>
				<view class="item-bottom">2018-05-26 18:30:45</view>
			</view>
			<view class="item">
				<view class="item-top">
					<view class="left">
						<view class="name">交易编号:</view>
						<view class="num">549564319852315</view>
					</view>
					<view class="right">￥98</view>
				</view>
				<view class="item-content">
					<view class="img">
						<image src="../../static/images/cards1.png" mode=""></image>
					</view>
					<view class="cardNum">
						<view class="i">
							<view class="name">名称:</view>
							<view class="con">一号店礼品卡</view>
							<view class="state">处理中</view>
						</view>
						<view class="i">
							<view class="name">卡号:</view>
							<view class="con">K9468211239</view>
						</view>
						<view class="i">
							<view class="name">卡密:</view>
							<view class="con">813595654111239</view>
						</view>
					</view>
				</view>
				<view class="item-bottom">2018-05-26 18:30:45</view>
			</view>
			<view class="item">
				<view class="item-top">
					<view class="left">
						<view class="name">交易编号:</view>
						<view class="num">549564319852315</view>
					</view>
					<view class="right">￥98</view>
				</view>
				<view class="item-content">
					<view class="img">
						<image src="../../static/images/cards1.png" mode=""></image>
					</view>
					<view class="cardNum">
						<view class="i">
							<view class="name">名称:</view>
							<view class="con">一号店礼品卡</view>
							<view class="state">处理中</view>
						</view>
						<view class="i">
							<view class="name">卡号:</view>
							<view class="con">K9468211239</view>
						</view>
						<view class="i">
							<view class="name">卡密:</view>
							<view class="con">813595654111239</view>
						</view>
					</view>
				</view>
				<view class="item-bottom">2018-05-26 18:30:45</view>
			</view>
			<view class="item">
				<view class="item-top">
					<view class="left">
						<view class="name">交易编号:</view>
						<view class="num">549564319852315</view>
					</view>
					<view class="right">￥98</view>
				</view>
				<view class="item-content">
					<view class="img">
						<image src="../../static/images/cards1.png" mode=""></image>
					</view>
					<view class="cardNum">
						<view class="i">
							<view class="name">名称:</view>
							<view class="con">一号店礼品卡</view>
							<view class="state">处理中</view>
						</view>
						<view class="i">
							<view class="name">卡号:</view>
							<view class="con">K9468211239</view>
						</view>
						<view class="i">
							<view class="name">卡密:</view>
							<view class="con">813595654111239</view>
						</view>
					</view>
				</view>
				<view class="item-bottom">2018-05-26 18:30:45</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:['处理中','已成功','失败','全部'],
				current:0,
			}
		},
		methods: {
			change(index){
				this.current = index
				console.log(index)
			}
		}
	}
</script>

<style>
	page{
		background-color: #e6e6e6;
	}
	.top{
		width: 100%;
		height: 100upx;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
	}
	.top>view{
		display: inline-block;
		width: 25%;
		padding: 0 5%;
		box-sizing: border-box;
		line-height: 100upx;
		font-size: 34upx;
	}
	.top>.active{
		color: #F18F02;
	}
	
	.content{
		margin-top: 120upx;
		width: 100%;
	}
	/* 订单卡片样式 */
	.item{
		width: 100%;
		height: 340upx;
		background-color: #fff;
		padding: 0 20upx;
		margin-bottom: 20upx;
		box-sizing: border-box;
	}
	.item .item-top{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1px solid #ccc;
	}
	.item .item-top .left{
		float: left;
		display: inline-block;
		padding-left: 10upx;
	}
	.item .item-top .left .name{
		display: inline-block;
		line-height: 80upx;
		font-size: 34upx;
		margin-right: 10upx;
		color: #333;
	}
	.item .item-top .left .num{
		display: inline-block;
		line-height: 80upx;
		font-size: 34upx;
		color: #999;
	}
	.item .item-top .right{
		float: right;
		line-height: 80upx;
		color: #F18F02;
		font-size: 34upx;
		padding-right: 20upx;
		display: inline-block;
	}
	.item .item-content{
		width: 100%;
		height: 200upx;
		padding-bottom: 20upx;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	.item .item-content .img{
		width: 100upx;
		height: 100%;
		display: inline-block;
		float: left;
		margin-right: 20upx;
	}
	.item .item-content .img image{
		width: 100upx;
		height: 100upx;
		margin-top: 50upx;
	}
	.item .item-content .cardNum{
		display: inline-block;
		float: left;
		width: 80%;
	}
	.item .item-content .cardNum .i{
		line-height: 55upx;
	}
	.item .item-content .cardNum .i:nth-child(1){
		margin-top: 10upx;
	}
	.item .item-content .cardNum .i .name{
		display: inline-block;
		margin-right: 10upx;
	}
	.item .item-content .cardNum .i .con{
		display: inline-block;
		color: #999;
	}
	.item .item-content .cardNum .i .state{
		display: inline-block;
		float: right;
		font-size: 30upx;
		color: #999;
	}
	.item .item-bottom{
		text-align: right;
		color: #999;
		padding-right: 10upx;
	}
</style>
