// const  = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.port || 3030



app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.set('view engine', 'ejs')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Sucessfully Started!')   
    res.render('index')
})

app.listen(port, () => {
    console.log(`Successfully Running on port ${port}`);
})