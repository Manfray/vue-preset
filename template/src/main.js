import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import {
  Button,
  TabPane,
  Tabs,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Popover,
  CheckboxGroup,
  Checkbox,
  Rate
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import './style/element-theme.scss' // 自定义主题色
import 'animate.css'
import '@/assets/icons' // icon

Vue.use(Button)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Popover)
Vue.use(DropdownItem)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Rate)
Vue.component(CollapseTransition.name, CollapseTransition)
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
