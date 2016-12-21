import template from "./editor.html"
import database from "./database"

const db = {posts: database.ref('/posts')}

export default {
  name: "editor",
  template: template,
  data: function() {
    return {
      message: ''
    }
  },
  
  methods: {
    submitted: function(evt) {
      db.posts.push({message: this.message})
    }
  }
}
