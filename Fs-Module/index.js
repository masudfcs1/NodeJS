const fs = require('fs');

fs.appendFile('./text.txt', ' I am 23 Year Old ', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Sucessful');
    }
})