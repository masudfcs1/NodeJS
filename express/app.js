const express = require("express");
const app = express();
const port = process.env.port || 8080;
const hostname = "127.0.0.1";
const morgan = require('morgan')

// app.use(morgan('dev'))

function custommiddleware(req, res, next) {
    if (req.url === "/contact") {
        res.send("Page is terminated");
    }
    next();
}

function tinylogger() {
    return (req, res) => {
        console.log(`${req.method}-${req.url}`);
        next()
    }
}

const middleware = [custommiddleware, tinylogger()]
    // app.use(custommiddleware)



app.get("/help", morgan('dev'), (req, res) => {
    // res.send("<h1>It's help Page</h1>")
    res.json({
        message: "I response From route handle"
    })
});

app.get("/about", morgan('dev'), (req, res) => {
    res.send("<h1>It's about Page</h1>");
});

app.get("/career", (req, res) => {
    res.send("<h1>It's Career Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>It's contact Page</h1>");
});

app.get("/", (req, res) => {
    res.send("<h1>Never Give Up!</h1>");
});

app.get("*", (req, res) => {
    res.send("<h1>404! Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Sucessfully.Server is Run ${port}`);
});

//  console.log('Masud Rana');