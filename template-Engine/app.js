const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index', { title: 'Title EJS Apply' })
})

app.use(morgan('dev'))
const port = process.env.port || 3030

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})