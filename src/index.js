import * as components from './components'

Object.keys(components).map(key => {
  const component = components[key]
  Vue.component(component.name, component)
})

import routes from './routes'
const router = new VueRouter({ routes })

import Store from './store'
const store = new Vuex.Store(Store)
Store.init(store)

new Vue({ router, store }).$mount('#view-container')
