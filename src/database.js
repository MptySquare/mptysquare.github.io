const db = firebase.database()

db.toArray = (obj) => Object.keys(obj).map(key => obj[key])

export default db
