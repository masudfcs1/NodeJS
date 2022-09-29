const express =require('express')
const morgan =require('morgan')
const http =require('http')

const app =express()

app.set('view engine','ejs')

app.use(morgan('dev'))

app. get('/index',(req,res)=>{
    res.render ('pages/index')
})
app. get('/about',(req,res)=>{
    res.render ('pages/about')
})
app. get('/service',(req,res)=>{
    res.render ('pages/service')
})

const port=3030
const hostname='127.0.0.1'

app.listen(port,hostname,()=>{
    console.log(`Server is Sucessfully Running at http://${hostname}:${port}`);
})