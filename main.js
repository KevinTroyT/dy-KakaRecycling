import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.url = 'http://192.168.0.5:8080'
//Vue.prototype.url = 'http://49.232.168.35:8081'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
