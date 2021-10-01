import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import './assets/tailwind.css'
import components from './index'
Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

new Vue({
	render: h => h(App),
}).$mount('#app')

// const ComponentLibrary = {
// 	install(Vue, options = {}) {
// 		for (const componentName in components) {
// 			const component = components[componentName]
// 			Vue.component(component.name, component)
// 		}
// 	}
// }
// export default ComponentLibrary

function installLibrary() {

	Object.entries(components).forEach(([componentName, component]) => {
		Vue.component(componentName, component)
	})
}

Vue.use(installLibrary)

// export default installLibrary
