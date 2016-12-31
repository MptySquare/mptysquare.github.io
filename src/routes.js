import homepage from './home.page'
import editorPage from './editor.page'

const routes = [
  { path: '/', redirect: '/post/', name: 'homepage', component: homepage },
  { path: '/post', component: homepage },
  { path: '/post/:post', component: homepage },
  { path: '/editor', name: 'editor', component: editorPage }
]

export default routes
