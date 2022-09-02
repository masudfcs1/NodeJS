const http = require('http')
const fs = require('fs')

// const server = http.createServer((req, res) => {
//     fs.readFile('./index.html', (err, data) => {
//         res.write(data)
//         res.end()
//     })
// })

// server.listen(4141, () => console.log('Sucessfully! Sever is Running'))




const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.write(data)
        res.end()
    })
})

server.listen(5050, () => console.log("Sucessfully! Code is Running."))