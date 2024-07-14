const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://woosuhan:abcd1234@boilerplate.u0rtmjw.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~hi메롱')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})