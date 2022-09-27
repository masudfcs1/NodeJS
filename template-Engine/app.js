const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    let post = {
        title: 'hello world',
        content: 'stick ruin',
        badboy: 'HEad',
        published: false
    }
    res.render('index', { title: 'Title EJS Apply', post })
})

app.use(morgan('dev'))
const port = process.env.port || 3030

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})