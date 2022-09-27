const express = require('express')
const morgan = require('morgan')

const app = express()

app.get('/', (req, res) => {
    res.render('index')
})

app.use(morgan('dev'))
const port = process.env.port || 3030

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})