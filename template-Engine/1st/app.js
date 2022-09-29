const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    // res.send('Working with template')
    res.render('index')
})

const port = process.env.port || 8080

app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
})