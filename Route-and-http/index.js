const express = require("express");
const app = express();
const port = process.env.port || 1010;
const hostname = "127.0.0.1";
const morgan = require('morgan')
app.use(morgan('dev'))



const userrouter = require('./router')
const postrouter = require('./postRoute')






app.use("/user", userrouter)
app.use('/post', postrouter)
    // app.use('/product/:prodId', (req, res) => {
    //     res.send('<h1>Talking about Product ID</h1>')
    // })

app.use('/product/:pordID', (req, res) => {
    res.send('<h1> about Product ID</h1>')
})


app.get("/", (req, res) => {
    res.send('<h1>Hi,There</h1>')
})


app.listen(port, () => {
    console.log(`Sucessfully.Server is Run ${port}`);
});