const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('EJS IS Running...')
    res.render('index')
})

const port = process.env.port || 8080

app.listen(port, () => {
    console.log(`Ejs is listening on ${port}`)
})