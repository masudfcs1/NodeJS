const express = require('express')
const app = express()

const prot = process.env.prot || 1010

app.listen(prot, () => {
    console.log(`Sever is Running on port ${prot}`);
})