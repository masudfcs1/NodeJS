 const express = require('express')
 const app = express();
 const port = process.env.port || 8080
 const hostname = '127.0.0.1'

 app.listen(port, () => {
     console.log(`Sucessfully.Server is Run ${port}`);
 })


 //  console.log('Masud Rana');