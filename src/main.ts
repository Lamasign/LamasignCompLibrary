import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import './assets/tailwind.css'
import * as components from './components'
Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

new Vue({
	render: h => h(App),
}).$mount('#app')

function installLibrary() {

	Object.entries(components).forEach(([componentName, component]) => {
		Vue.component(componentName, component)
	})
}

Vue.use(installLibrary)

export default installLibrary
export * from './components'
export * from './utils'
