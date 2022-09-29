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

    // let posts=[
    //     {title: 'title One',author:"Masud Rana"},
    //     {title: 'title two',author:"Masud Rana"},
    //     {title: 'title three',author:"Masud Rana"},
    //     {title: 'title Four',author:"Masud Rana"}

    // ]
    //  res.render('index',{title:'EJS is an awesome',posts})

    res.render('index')
    
})
const http=require('http')
const hostname='127.0.0.1'

app.listen(port, () => {
    console.log(`Successfully Running on port http://${hostname}:${port}`);
})