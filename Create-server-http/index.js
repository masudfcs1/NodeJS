const http = require('http')
const prot = 2000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req, res) => {
    // console.log("Sucessfully Run Server.");
    res.end("Hi, There.")
})


myserver.listen(prot, hostname, () => {
    console.log(`Server is run sucessfully at http://${hostname}:${prot}`);
});