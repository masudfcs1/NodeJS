const express = require("express");
const app = express();
const port = process.env.port || 8080;
const hostname = "127.0.0.1";
const morgan = require('morgan')

app.use(morgan('dev'))

const router = express.Router()

router.get('/login', (req, res) => {
    res.send("<h1>This is Login Route.</h1>")
    req.url

})


router.get('/signup', (req, res) => {
    res.send("<h1>This is Login Route.</h1>")
})


router.get('/about', (req, res) => {
    res.send("<h1>This is About Route.</h1>")
})


router.get('/contact', (req, res) => {
    res.send("<h1>This is Contact Route.</h1>")
})

app.use("/user", router)


app.get("/", (req, res) => {
    res.send('<h1>Hi,There</h1>')
})


app.listen(port, () => {
    console.log(`Sucessfully.Server is Run ${port}`);
});