const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Sever is running')
    res.render('app')
})

const port = process.env.port || 7070

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})