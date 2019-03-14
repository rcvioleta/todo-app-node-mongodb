const getDb = require('../utils/database').getDb

class Todo {
  constructor(name, title, content) {
    this.name = name
    this.title = title
    this.content = content
    this.date = new Date().toISOString()
  }

  save() {
    const db = getDb()
    db.collection('todo')
      .insertOne(this)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static fetchAll() {
    const db = getDb()
    return db.collection('todo')
      .find()
      .toArray()
      .then(result => {
        console.log(result)
        return result
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = Todo