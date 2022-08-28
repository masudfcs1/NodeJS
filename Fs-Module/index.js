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

//readFile
// fs.readFile('./text.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Sucessful', data);
//     }
// })

//rename
// fs.rename('./text1.txt', 'text.txt', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Sucessful', data);
//     }
// })


//deleted Funcation
fs.unlink('text.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Sucessful', data);
    }
})