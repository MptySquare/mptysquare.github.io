import database from "./database"

const db = {
  posts: database.ref('/posts')
}

const Store = {
  state: {
    posts: []
  },
  mutations: {
    addPost(state, payload) {
      state.posts.push(payload)
    },
    setPosts(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    createPost(context, payload) {
      payload.id = db.posts.push().key
      db.posts.child(payload.id).set(payload)
      context.commit('addPost', payload)
    }
  },
  init(store) {
    db.posts.once('value', snap => {
      const val = (snap.val()) ? database.toArray(snap.val()) : []
      store.commit('setPosts', val)
    })
  }
}


export default Store
