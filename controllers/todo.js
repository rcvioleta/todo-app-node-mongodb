const Todo = require('../models/todo')

exports.getIndex = (req, res) => {
  Todo.fetchAll()
    .then(todos => {
      res.render('index', {
        todos: todos,
        pageTitle: 'Home Page'
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.createTodo = (req, res) => {
  const name = req.body.name
  const title = req.body.title
  const content = req.body.content
  const todo = new Todo(name, title, content)
  todo.save()
}