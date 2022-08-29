const http = require('http')
const prot = 2000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req, res) => {
    res.writeHead(206, 'content-Type', 'text/plain')
    res.end("Hi, Server is sucessfully Run")
})


myserver.listen(prot, hostname, () => {
    console.log(`Server is Sucessfully Running at http://${hostname}:${prot}`);
})