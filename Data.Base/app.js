const express = require('express')
const morgan = require('morgan')
const port = process.env.port || 8080
const http=require('http')
const hostname='127.0.0.1'
const mongoose=require('mongoose')

const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
           message: 'Hello there!'
    })
})

mongoose.connect('mongodb://localhost:27017/test',{
   // useNewUrlParser: false,
    serverSelectionTimeoutMS:5.0,
})

.then(()=>{
    app.listen(port,hostname, () => {
  //  console.log(`Server is Running at http://${hostname}:${port}`);
    console.log(`Server is Sucessfully Running at http://${hostname}:${port}`);
   })
})

.catch(e =>{
   console.log("Not Connected to Mongoose Server");
})


