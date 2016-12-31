import template from './home.page.html'

export default {
  template: template,
  computed: {
    posts() {
      return this.$store.state.posts
    },
    postId() {
      const postParam = parseInt(this.$route.params.post)
      return (postParam) ? postParam : 0
    },
    post() {
      return this.posts[this.postId]
    },
    nav() {
      return {
        next: `#/post/${ this.postId+1 }`,
        prev: `#/post/${ this.postId-1 }`
      }
    }
  }
}
