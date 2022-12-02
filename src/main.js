import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import Flutterwave from  'flutterwave-vue-v3'
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TESTXXXXXXXXXX' } )
const app = createApp({
  router,
  render: () => h(App),
  mounted(){
    AOS.init()
  },
})


app.mount('#app')
