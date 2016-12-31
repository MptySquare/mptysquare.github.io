import template from "./editor.html"

export default {
  name: "editor",
  template: template,
  data: function() {
    return {
      title: '',
      message: ''
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    submitted: function(evt) {
      const {title, message} = this
      this.$store.dispatch('createPost', {title, message})
    }
  },
}
