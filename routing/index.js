const http = require('http')
const fs = require('fs');
const { error } = require('console');
const prot = 2000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req, res) => {
    //res.writeHead(206, 'content-Type', 'text/plain')
    // console.log(req.url);

    // res.end("Hi, Server is sucessfully Run")

    const handleredfile = (statuscode, filename) => {

        fs.readFile(filename, (err, data) => {
            res.writeHead(statuscode, { "Contact-type": "text/html" })
            res.write(data)
            res.end();
        })

    }





    if (req.url === '/') {
        handleredfile(200, "home.html")
    } else if (req.url === '/about') {
        handleredfile(200, "about.html")

    } else if (req.url === '/contact') {
        handleredfile(200, "contact.html")

    } else {
        handleredfile(404, "home.html")

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