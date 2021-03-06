import template from "./editor.html"

export default { template,
  name: "editor",
  data() {
    return {
      id: null,
      title: '',
      uri: '',
      messageId: '',
      published: false
    }
  },
  computed: {
    post: {
      get() {
        return (this.posts.indexOf(this.id) > -1) ? this.posts[this.id] : {}
      },
      set(post) {
        this.id = post.id
        this.title = post.title
        this.uri = post.uri
        this.markdownEditor.value(post.message)
      }
    },
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    edit(post) {
      this.post = post
    },
    submitted(evt) {
      const message = this.markdownEditor.value()
      const {id, title, uri, published} = this
      this.$store.dispatch('setPost',{id, title, message, uri, published})
    }
  },
  mounted() {
    this.markdownEditor = new SimpleMDE({
      element: $(this.$el).find(this.messageId)[0],
      spellChecker: false
    })
  }
}
