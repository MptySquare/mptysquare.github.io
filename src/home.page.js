import template from './home.page.html'
import database from "./database"

const db = {posts: database.ref('/posts')}

export default {
  template: template,
  data() {
    return {
      posts: {}
    }
  },
  mounted() {
    console.log('mounted home page')
    db.posts.on('value', snap => {
      const data = snap.val()
      this.posts = data
      console.log('data', this.posts)
    })
  }
}
