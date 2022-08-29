const http = require('http')
const fs = require('fs');
const { error } = require('console');
const prot = 2000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req, res) => {
    //res.writeHead(206, 'content-Type', 'text/plain')
    // console.log(req.url);

    // res.end("Hi, Server is sucessfully Run")

    if (req.url === '/') {
        fs.readFile("home.html", (err, data) => {
            res.writeHead(200, { "Contact-type": "text/html" })
            res.write(data)
            res.end();
        })
    } else if (req.url === '/about') {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "Contact-type": "text/html" })
            res.write(data)
            res.end();
        })
    } else if (req.url === '/contact') {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, { "Contact-type": "text/html" })
            res.write(data)
            res.end();
        })
    } else {
        fs.readFile("error.html", (err, data) => {
            res.writeHead(404, { "Contact-type": "text/html" })
            res.write(data)
            res.end();
        })
    }

    //Partice 
    // if (req.url === '/error') {
    //     fs.readFile("error.html", (req, res) => {
    //         res.writeHead(200, { "Contact-type": "text/html" })
    //         res.write(data)
    //         res.end();
    //     })
    // }

})


myserver.listen(prot, hostname, () => {
    console.log(`Server is Sucessfully Running at http://${hostname}:${prot}`);
})