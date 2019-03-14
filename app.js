const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')

const mongoConnect = require('./utils/database').mongoConnect

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', 'views')

const todoRoutes = require('./routes/todo')

app.use(todoRoutes)

mongoConnect(client => {
  console.log(client)
  app.listen(port)
})

