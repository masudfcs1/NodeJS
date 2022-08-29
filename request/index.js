const http = require('http');
const { type, platform } = require('os');
const { text } = require('stream/consumers');
const prot = 2000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req, res) => {
    res.writeHead(202, { 'Content-type': 'text/html' })
    res.write("<h1>Life is Beautiful.</h1>")
    res.end("Hi, Server is sucessfully Run")
})


myserver.listen(prot, hostname, () => {
    console.log(`Server is Sucessfully Running at http://${hostname}:${prot}`);
})