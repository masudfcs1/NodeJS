const express = require("express");
const app = express();
const port = process.env.port || 1010;
const hostname = "127.0.0.1";
const morgan = require('morgan')
app.use(morgan('dev'))

const userrouter = require('./router')



app.use("/user", userrouter)


app.get("/", (req, res) => {
    res.send('<h1>Hi,There</h1>')
})


app.listen(port, () => {
    console.log(`Sucessfully.Server is Run ${port}`);
});