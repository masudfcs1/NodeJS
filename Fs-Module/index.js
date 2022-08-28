const { log } = require('console');
const fs = require('fs');

// WirteFile 

// fs.writeFile('./text.txt', 'This is Masud Rana', (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Sucessful');
//     }
// })


// appendFile
// fs.appendFile('./text.txt', ' I am 23 Year Old ', (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Sucessful');
//     }
// })


fs.readFile('./text.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Sucessful', data);
    }
})