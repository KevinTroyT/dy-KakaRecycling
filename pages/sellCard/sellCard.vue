<template>
	<view>
		<view class="top">
			<view class="card1" @click="card1Click">
				<view class="name">卡类</view>
				<view class="card1Name">
					<view class="left">{{card1Name ? card1Name : '请选择卡类'}}</view>
					<image :src="src+card1Logo" mode=""></image>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1" @click="card2Click">
				<view class="name">卡种</view>
				<view class="card1Name">
					<view class="left">{{card2Name ? card2Name : '请选择卡种'}}</view>
					<image :src="src+card2Logo" mode=""></image>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1" @click="card3Click">
				<view class="name">面值</view>
				<view class="card1Name">
					<view class="left">{{card3FaceValue ? card3FaceValue : '请选择面值'}}</view>
					<view class="discount">{{card3Discount}}</view>
				</view>
				<view class="right-icon">
					<image src="../../static/images/right_1.png" mode=""></image>
				</view>
			</view>
			<view class="card1">
				<view class="name">回收价</view>
				<view class="card1Name">
					<view class="left">{{discountPrice}}</view>
					
				</view>
			</view>
		</view>
		
		<view class="commit" v-if="discountPrice">
			<view class="tabCards">
				<block v-for="(tab,index) in item" :key="index">
					<view 
						class="commit-tan"
						:class="{'tab-active':current == index}"
						@click="changeTab(index)"
					>
						{{tab}}
					</view>
				</block>
			</view>
			<view class="box">
				<view class="one" v-if="current=='0'">
					<view class="commit-item" v-if="hasCardNumber == '0'">
						<view class="name">卡号</view>
						<input type="text" v-model="cardNumber" placeholder="请输入礼品卡卡号">
						<image src="../../static/images/saomiao.png" class="saomiao" mode="" @click="scanningCard"></image>
					</view>
					<view class="commit-item">
						<view class="name">卡密</view>
						<input type="text" v-model="cardPsd" placeholder="请输入礼品卡卡密">
						<image src="../../static/images/saomiao.png" class="saomiao" mode="" @click="scanningPsd"></image>
					</view>
				</view>
				<view class="more" v-else>
					<textarea class="txt" v-model="cards" v-if="hasCardNumber == '0'" placeholder="每张卡占用一行,卡号与卡密之间用逗号隔开" />
					<textarea class="txt" v-model="cards" v-else placeholder="每张卡的卡密占用一行" />
				</view>
				<view class="beizhu" v-if="remark">
					备注:{{remark}}
				</view>
			</view>
		</view>
		<view class="commit-btn" v-if="discountPrice">
			<button @click="commit">提交</button>
		</view>
		
		<view class="middle">
			<view class="left">获取方式</view>
			<view class="step">交易步骤</view>
			<view class="right">常见问题</view>
		</view>
		<view class="bottom">
			<view class="title">用户须知</view>
			<view class="box">
				<view class="hint">1、<text style="font-size: 26upx;font-weight: 600;">请正确核对卡号与密码是否相对应,并保证仅在本平台进行转让,</text>否则可能导致无法结算,给您带来损失！</view>
				<view class="hint">2、请务必同时输入正确的卡号和密码,<text style="font-size: 26upx;font-weight: 600;color: red;">如果卡号错误,密码正确也有可能给您带来损失</text>！</view>
				<view class="hint">3、请保证选择的充值卡面值与实际面值一致,<text style="font-size: 26upx;font-weight: 600;">面值选错将无法正常结算,给您带来损失</text></view>
				<view class="hint">4、为保证您的资金安全,请先进行实名认证再提交,实名认证通过后方可提现</view>
				<view class="hint">5、<text style="font-size: 26upx;font-weight: 600;">含有“自动”标识的卡种</text>为系统自动结算形式回收,话费卡、加油卡一般1-30分钟内可以处理完成,其他卡种以页面备注为准</view>
			</view>
		</view>
		
		<!-- 卡类弹窗 -->
		<view class="card1-box" v-if="card1Show">
			<view class="title">请选择卡类</view>
			<image class="close" src="../../static/images/close.png" @click="card1Close" mode=""></image>
			<view class="cards-box">
				<block v-for="(item,index) in card1List" :key="index">
					<view class="card-item" @click="pitchCard1(item.id,item.name,item.logo)">
						<view class="name">{{item.name}}</view>
						<image :src="src+item.logo" mode=""></image>
					</view>
				</block>
			</view>
		</view>
		<view id="mask1" v-if="card1Show" @click="card1Close"></view>
		
		<!-- 卡种弹窗 -->
		<view class="card1-box" v-if="card2Show">
			<view class="title">请选择卡种</view>
			<image class="close" src="../../static/images/close.png" @click="card2Close" mode=""></image>
			<view class="cards-box">
				<block v-for="(item,index) in card2List" :key="index">
					<view class="card-item" @click="pitchCard2(item.id,item.name,item.imgPath,item.hasCardNumber,item.remark)">
						<view class="name">{{item.name}}</view>
						<image :src="src+item.imgPath" mode=""></image>
					</view>
				</block>
			</view>
		</view>
		<view id="mask1" v-if="card2Show" @click="card2Close"></view>
		
		<!-- 面值弹窗 -->
		<view class="card1-box" v-if="card3Show">
			<view class="title">请选择卡面值</view>
			<image class="close" src="../../static/images/close.png" @click="card3Close" mode=""></image>
			<view class="face-box">
				<block v-for="(item,index) in card3List" :key="index">
					<view class="face-item" @click="pitchCard3(item.id,item.faceValue,item.discount,item.discountPrice)">
						<view class="money-box">
							<view class="money">￥{{item.faceValue}}</view>
							<view class="bottom-money"><view class="left">￥{{item.discountPrice}}</view><view class="right">{{item.discount}}折</view></view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<view id="mask1" v-if="card3Show" @click="card3Close"></view>
		
		<view class="commit-memu" v-if="commitMemuShow">
			<view class="title">提交确认</view>
			<image class="close" src="../../static/images/close.png" @click="closeMemu" mode=""></image>
			<view class="memu-box">
				<view class="title1">尊敬的客户:</view>
				<view class="memu-item">
					<view class="memu-name">您的卡类为:</view>
					<view class="memu-con">{{card1Name}}</view>
				</view>
				<view class="memu-item">
					<view class="memu-name">您的卡种为:</view>
					<view class="memu-con">{{card2Name}}</view>
				</view>
				<view class="memu-item">
					<view class="memu-name">您的面值为:</view>
					<view class="memu-con">{{card3FaceValue}}</view>
				</view>
				<view class="memu-item">
					<view class="memu-name">注意:</view>
					<view class="memu-con">切记面值不符,损失自负</view>
				</view>
			</view>
			<view class="bottom-btn">
				<view class="memu-close" @click="closeMemu">返回修改</view>
				<view class="commitCard" @click="commitCard">确认提交</view>
			</view>
		</view>
		<view id="mask1" v-if="commitMemuShow"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card1Show:false,
				card2Show:false,
				card3Show:false,
				item:['单卡提交','批量提交'],
				current:0,
				src:'',
				card1List:[],//卡类列表数组
				card2List:[],//卡种列表数组
				card3List:[],//面值列表数组
				token:'',//onShow时获取token存起来，以便每次发送请求都要重新获取
				card1Name:'',//选择的卡类名称
				card1Logo:'',//选择的卡类logo
				card1Id:'',//选择的卡类id
				card2Name:'',//选择的卡种名称
				card2Logo:'',//选择的卡种logo
				card2Id:'',//选择的卡种id
				hasCardNumber:'0',//0为有卡号 1为无卡号
				card3Id:'',//选择的面值id
				card3FaceValue:'',//选择的面值
				card3Discount:'',//选择的面值折扣
				discountPrice:'',//回收价
				remark:'',//备注
				cardNumber:'',//单卡提交输入的卡号
				cardPsd:'',//单卡提交输入的卡密
				cards:'',//批量提交
				name:'',
				phone:'',
				commitMemuShow:false,//提交蒙版显示隐藏
			}
		},
		onShow(){
			this.src = this.url
			this.token = uni.getStorageSync('token')
			let card1Id = uni.getStorageSync('card1Id')
			let card2Id = uni.getStorageSync('card2Id')
			let _this = this
			uni.request({
				url: this.url + '/mobile/classificationData',
				method:'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token': this.token
				},
				data:{
					type:2
				},
				success: (res) => {
					console.log(res);
					_this.card1List = res.data.data.classList
					if(card1Id){
						this.card1Id = card1Id
						for(let i = 0 ; i < _this.card1List.length ; i++){
							if(_this.card1List[i].id == card1Id){
								_this.card1Id = _this.card1List[i].id
								_this.card1Name = _this.card1List[i].name
								_this.card1Logo = _this.card1List[i].logo
							}
						}
					}
				}
			})
			if(card1Id){
				uni.removeStorageSync('card1Id')
				uni.request({//获取卡种列表
					url: _this.url + '/mobile/cardListData',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token': _this.token
					},
					data:{
						type:2,
						commodityClassId:card1Id
					},
					success: (res) => {
						console.log(res);
						_this.card2List = res.data.data
						if(card2Id){
							console.log(card2Id)
							this.card2Id = card2Id
							for(let j = 0 ; j < _this.card2List.length ; j++){
								if(_this.card2List[j].id == card2Id){
									_this.card2Id = _this.card2List[j].id
									_this.card2Name = _this.card2List[j].name
									_this.card2Logo = _this.card2List[j].imgPath
								}
							}
						}
					}
				})
			}
			if(card2Id){
				uni.removeStorageSync('card2Id')
				uni.request({//获取面值列表
					url: _this.url + '/mobile/getFaceVlaueData',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token': _this.token
					},
					data:{
						type:2,
						commodityId:card2Id
					},
					success: (res) => {
						console.log(res);
						_this.card3List = res.data.data
						for(let i=0;i<_this.card3List.length;i++){
							_this.card3List[i].discountPrice = (_this.card3List[i].faceValue*_this.card3List[i].discount).toFixed(2)
							_this.card3List[i].discount = (_this.card3List[i].discount*10).toFixed(1)
						}
					}
				})
			}
			uni.request({
				url: this.url + '/mobile/realData',
				method:'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'token': this.token
				},
				data:{
					
				},
				success: (res) => {
					console.log(res);
					_this.name = res.data.realName
					_this.phone = res.data.alipayAccount
				}
			})
		},
		methods: {
			commitCard(){//蒙版点击确认提交
				if(this.current == '0'){//单卡提交
					// 发送请求
					uni.request({
						url: this.url + '/mobile/saveCard',
						method:'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded' ,// 默认值
							token:this.token
						},
						data:{
							commodityId: this.card2Id ,//卡种id
							feedbackId: this.card3Id,//面值id
							cardNumber: this.cardNumber,
							cardPassword: this.cardPsd,
							alipayAccount: this.phone,
							realName: this.name,
							type: 0,//0为单卡提交，1为多卡提交
							hasCardNumber: this.hasCardNumber,
						},
						success: (res) => {
							console.log(res);
							this.commitMemuShow = false
							if(res.data.result){
								uni.showToast({
									title: '提交成功',
									duration: 2000,
								});
							}else{
								uni.showToast({
									title: res.data.msg,
									icon:'none',
									duration: 2000,
								});
							}
						},
						error:function(){
							uni.showToast({
								title: '网络错误,请稍后再试',
								icon:'none',
								duration: 2000,
							});
						}
					})
				}else{//批量提交
					// 发送请求
					uni.request({
						url: this.url + '/mobile/saveCard',
						method:'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded' ,// 默认值
							token:this.token
						},
						data:{
							commodityId: this.card2Id ,//卡种id
							feedbackId: this.card3Id,//面值id
							alipayAccount: this.phone,
							realName: this.name,
							cards:this.cards,//批量提交字符串
							type: 1,//0为单卡提交，1为多卡提交
							hasCardNumber: this.hasCardNumber,
						},
						success: (res) => {
							console.log(res);
							this.commitMemuShow = false
							if(res.data.result){
								uni.showToast({
									title: '提交成功',
									duration: 2000,
								});
							}else{
								uni.showToast({
									title: res.data.msg,
									icon:'none',
									duration: 2000,
								});
							}
						},
						error:function(){
							uni.showToast({
								title: '网络错误,请稍后再试',
								icon:'none',
								duration: 2000,
							});
						}
					})
				}
			},
			closeMemu(){
				this.commitMemuShow = false
			},
			commit(){//提交事件
				let _this = this
				if(this.name=='' || this.phone==''){
					uni.showModal({
						title: '提交',
						content:'请先绑定打款账户',
						success:function(){
							uni.navigateTo({
								url: '../account/account'
							})
						}
					})
					return false
				}
				
				if(this.current == '0'){//单卡提交
					if(this.hasCardNumber == '0'){//有卡号
						if(this.cardNumber == ''){
							uni.showModal({
								title: '提交',
								content:'请输入礼品卡卡号'
							})
							return false
						}else if(this.cardPsd == ''){
							uni.showModal({
								title: '提交',
								content:'请输入礼品卡卡密'
							})
							return false
						}
						this.commitMemuShow = true
					}else{//无卡号
						if(this.cardPsd == ''){
							uni.showModal({
								title: '提交',
								content:'请输入礼品卡卡密'
							})
							return false
						}
						this.commitMemuShow = true
					}
				}else{//批量提交
					if(this.cards == ''){
						uni.showModal({
							title: '提交',
							content:'请至少输入一张礼品卡信息'
						})
						return false
					}
					this.commitMemuShow = true
				}
			},
			scanningCard(){//扫描卡号二维码逻辑
				let _this = this
				console.log(12345678978)
				uni.scanCode({
					onlyFromCamera:false,
					success:function(res){
						console.log(res.result)//扫描二维码出来的数据
						_this.cardNumber = res.result
					}
				})
			},
			scanningPsd(){//扫描卡密二维码逻辑
				let _this = this
				uni.scanCode({
					onlyFromCamera:false,
					success:function(res){
						console.log(res.result)//扫描二维码出来的数据
						_this.cardPsd = res.result
					}
				})
			},
			
			card1Click(){//卡类点击出现选择框
				this.card1Show = true
			},
			card1Close(){
				this.card1Show = false
			},
			pitchCard1(id,name,logo){
				// 清空卡种和面值的值
				this.card2Id = ''
				this.card2Name = ''
				this.card2Logo = ''
				this.hasCardNumber = ''
				this.card3Id = ''
				this.card3FaceValue = ''
				this.card3Discount = ''
				this.discountPrice = ''
				let _this = this
				this.card1Id = id
				this.card1Name = name
				this.card1Logo = logo
				this.card1Show = false
				uni.request({//获取卡种列表
					url: _this.url + '/mobile/cardListData',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token': _this.token
					},
					data:{
						type:2,
						commodityClassId:_this.card1Id
					},
					success: (res) => {
						console.log(res);
						_this.card2List = res.data.data
					}
				})
			},
			card2Click(){//卡种点击出现选择框
				this.card2Show = true
			},
			card2Close(){
				this.card2Show = false
			},
			pitchCard2(id,name,src,hasCardNumber,remark){//卡种选择事件
				this.card3Id = ''
				this.card3FaceValue = ''
				this.card3Discount = ''
				this.discountPrice = ''
				let _this = this
				this.card2Id = id
				this.card2Name = name
				this.card2Logo = src
				this.remark = remark
				this.hasCardNumber = hasCardNumber
				this.card2Show = false
				uni.request({//获取面值列表
					url: _this.url + '/mobile/getFaceVlaueData',
					method:'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded' ,// 默认值
						'token': _this.token
					},
					data:{
						type:2,
						commodityId:_this.card2Id
					},
					success: (res) => {
						console.log(res);
						_this.card3List = res.data.data
						for(let i=0;i<_this.card3List.length;i++){
							_this.card3List[i].discountPrice = (_this.card3List[i].faceValue*_this.card3List[i].discount).toFixed(2)
							_this.card3List[i].discount = (_this.card3List[i].discount*10).toFixed(1)
						}
					}
				})
			},
			card3Click(){//面值点击出现选择框
				this.card3Show = true
			},
			card3Close(){
				this.card3Show = false
			},
			pitchCard3(id,faceValue,discount,discountPrice){
				this.card3Id = id
				this.card3FaceValue = faceValue
				this.card3Discount = (discount*10).toFixed(1)+'折'
				this.discountPrice = discountPrice
				this.card3Show = false
			},
			changeTab(index){
				this.current = index
			}
		}
	}
</script>

<style>
	/* 确认提交蒙版样式 */
	.commit-memu{
		width: 70%;
		height: 600upx;
		position: fixed;
		left: 15%;
		top: 300upx;
		border-radius: 20upx;
		background-color: #fff;
		z-index: 999;
	}
	.commit-memu .title{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		font-size: 36upx;
		text-align: center;
	}
	.commit-memu .close{
		width: 50upx;
		height: 50upx;
		position: absolute;
		top: 25upx;
		right: 25upx;
	}
	.commit-memu .memu-box{
		width: 100%;
		height: 420upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.commit-memu .memu-box .title1{
		font-size: 32upx;
		width: 100%;
		height: 80upx;
		line-height: 80upx;
	}
	.commit-memu .memu-box .memu-item{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
	}
	.commit-memu .memu-box .memu-item>view{
		display: inline-block;
		font-size: 32upx;
	}
	.commit-memu .memu-box .memu-item .memu-con{
		color: red;
		margin-left: 20upx;
	}
	.commit-memu .bottom-btn{
		width: 100%;
		height: 80upx;
	}
	.commit-memu .bottom-btn>view{
		display: inline-block;
		width: 50%;
		height: 100%;
		font-size: 36upx;
		line-height: 80upx;
		text-align: center;
	}
	.commit-memu .bottom-btn .memu-close{
		color: #ccc;
		background-color: #f2f2f2;
		border-bottom-left-radius: 20upx;
	}
	.commit-memu .bottom-btn .commitCard{
		color: #fff;
		background-color: blue;
		border-bottom-right-radius: 20upx;
	}
	
	.discount{
		color: red;
		float: right;
		line-height: 100upx;
	}
	.commit-btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100upx;
		background-color: #fff;
		padding: 10upx 80upx;
		box-sizing: border-box;
	}
	.commit-btn button{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		background-color: #6ac4c0;
		border-radius: 20upx;
	}
	/* 面值样式 */
	.face-box{
		width: 100%;
		height: 600upx;
		padding: 20upx 30upx;
		box-sizing: border-box;
		overflow-y: scroll;
	}
	.face-box .face-item{
		width: 33.3%;
		height: 160upx;
		padding: 10upx;
		box-sizing: border-box;
		float: left;
	}
	.face-box .face-item .money-box{
		width: 100%;
		height: 100%;
		background-color: #ccc;
		padding-top: 30upx;
		box-sizing: border-box;
	}
	.face-box .face-item .money-box .money{
		font-size: 36upx;
		text-align: center;
		line-height: 60upx;
	}
	.face-box .face-item .money-box .bottom-money{
		width: 100%;
		text-align: center;
		box-sizing: border-box;
	}
	.face-box .face-item .money-box .bottom-money>view{
		display: inline-block;
		font-size: 26upx;
		width: 50%;
	}
	.face-box .face-item .money-box .bottom-money .left{
		color: #4b4b4b;
	}
	.face-box .face-item .money-box .bottom-money .right{
		color: red;
	}
	
	.card1-box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 700upx;
		background-color: #fff;
		z-index: 99;
	}
	.card1-box .title{
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		font-size: 34upx;
	}
	.card1-box .close{
		width: 50upx;
		height: 50upx;
		position: absolute;
		right: 25upx;
		top: 25upx;
	}
	.card1-box .cards-box{
		width: 100%;
		height: 600upx;
		overflow-y: scroll;
	}
	.card1-box .cards-box .card-item{
		width: 100%;
		height: 150upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	.card1-box .cards-box .card-item .name{
		font-size: 34upx;
		line-height: 150upx;
		float: left;
	}
	.card1-box .cards-box .card-item image{
		width: 100upx;
		height: 100upx;
		margin-top: 25upx;
		margin-right: 30upx;
		float: right;
	}
	#mask1{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5);
	}
	
	page{
		background-color: #f2f2f2;
	}
	.top{
		width: 100%;
		height: 400upx;
		padding: 0 30upx;
		background-color: #fff;
		box-sizing: border-box;
	}
	.top .card1{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
	}
	.top .card1:last-child{
		border-bottom: none;
	}
	.top .card1 .name{
		display: inline-block;
		float: left;
		line-height: 100upx;
		width: 15%;
	}
	.top .card1 .card1Name{
		width: 70%;
		height: 100%;
		display: inline-block;
	}
	.top .card1 .card1Name .left{
		display: inline-block;
		line-height: 100upx;
		float: left;
	}
	.top .card1 .card1Name image{
		display: inline-block;
		margin-top: 20upx;
		width: 60upx;
		height: 60upx;
		float: right;
	}
	.top .card1 .right-icon{
		display: inline-block;
		float: right;
		width: 40upx;
		margin-top: 25upx;
		height: 50upx;
	}
	.top .card1 .right-icon image{
		width: 100%;
		height: 100%;
	}
	
	.middle{
		width: 100%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20upx 40upx;
		box-sizing: border-box;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	.middle>view{
		display: inline-block;
		width: 33.3%;
		height: 100%;
		line-height: 60upx;
		text-align: center;
	}
	.middle .step{
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	
	.bottom{
		width: 100%;
		height: 600upx;
		padding: 30upx 40upx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.bottom .title{
		color: #d7362f;
		font-size: 30upx;
		height: 40upx;
		line-height: 40upx;
		padding-left: 10upx;
		border-left: 4px solid #d7362f;
	}
	
	.box{
		width: 100%;
		padding: 10upx;
		box-sizing: border-box;
	}
	.box .hint{
		width: 100%;
		font-size: 26upx;
		color: #ccc;
	}
	/* 输入框样式 */
	.commit{
		width: 100%;
		background-color: #fff;
	}
	.commit .tabCards{
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20%;
		box-sizing: border-box;
	}
	.commit .tabCards .commit-tan{
		font-size: 36upx;
		display: inline-block;
	}
	.commit .tabCards .tab-active{
		color: #6ac4c0;
		border-bottom: 1px solid #6ac4c0;
	}
	.box{
		width: 100%;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.one{
		width: 100%;
	}
	.one .commit-item{
		width: 100%;
		height: 120upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}
	.one .commit-item .name{
		width: 20%;
		height: 100%;
		float: left;
		display: inline-block;
		line-height: 120upx;
		font-size: 36upx;
	}
	.one .commit-item input{
		width: 60%;
		height: 100%;
		float: left;
		display: inline-block;
		line-height: 80upx;
		font-size: 36upx;
	}
	.one .commit-item .saomiao{
		width: 60upx;
		height: 60upx;
		margin-top: 30upx;
		margin-right: 10upx;
		float: right;
	}
	.more{
		width: 100%;
		padding: 10upx 20upx;
		box-sizing: border-box;
	}
	.more .txt{
		width: 100%;
		height: 200upx;
		padding-left: 20upx;
		font-size: 34upx;
		line-height: 40upx;
		box-sizing: border-box;
	}
	.beizhu{
		font-size: 30upx;
		color: red;
		padding: 0 20upx;
		box-sizing: border-box;
		margin-top: 10upx;
	}
</style>
