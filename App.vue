<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let token = uni.getStorageSync('token')
			console.log(token)
			if(token){
				return false
			}else{
				uni.navigateTo({
					url: './pages/login/login'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
</style>
