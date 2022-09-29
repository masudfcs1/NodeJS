const express =require('express')
const morgan =require('morgan')
const http =require('http')

const app =express()

app.set('view engine','ejs')

app.use(morgan('dev'))

app. get('/',(req,res)=>{
    let post={
        title: 'Never Give UP',
        author: 'Masud Rana'
    }
    let posts=[
        {title: 'Title ONE',author: "Masud Rana"},
        {title: 'Title Two',author: "Masud Rana"},
        {title: 'Title Three',author: "Masud Rana"},
        {title: 'Title Four',author: "Masud Rana"}
    ]
    res.render ('index',{title:'',post, posts})
})

const port=3030
const hostname='127.0.0.1'

app.listen(port,hostname,()=>{
    console.log(`Server is Sucessfully Running at http://${hostname}:${port}`);
})