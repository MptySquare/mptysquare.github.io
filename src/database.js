import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCZ75-IkmI4pZ8WAG52rLNCq2YU8MuoHBA",
  authDomain: "postmaker-82524.firebaseapp.com",
  databaseURL: "https://postmaker-82524.firebaseio.com",
  storageBucket: "postmaker-82524.appspot.com",
  messagingSenderId: "643974495836"
})

const db = firebase.database()

db.toArray = (obj) => Object.keys(obj).map(key => obj[key])

export default db
