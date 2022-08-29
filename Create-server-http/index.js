const http = require('http')

http.createServer((req, res) => {
    console.log("Sucessfully Run Server.");
    res.end("Hi, There.")
}).listen(3000);