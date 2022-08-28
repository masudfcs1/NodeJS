const fs = require('fs');

fs.writeFile('./text.txt', 'This is Simple text', function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Sucessful');
    }
})