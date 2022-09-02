const http = require('http')
const hostname = '127.0.0.1'

const ser = http.createServer((req, res) => {
    console.log(req.url);
    res.end("<h1>Server Is Running.</h1>")
})

ser.listen(4141, () => {
    console.log("Sucessfully! Server is Running");
})