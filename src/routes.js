import homepage from './home.page'
import editorPage from './editor.page'

const routes = [
  { path: '/', component: homepage },
  { path: '/editor', component: editorPage }
]

const router = new VueRouter({
  routes // short for routes: routes
})

export default router
