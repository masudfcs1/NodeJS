const fs = require('fs')

const objdata = {
    name: 'Masud Rana',
    email: 'masudfcs1@gmai.com',
    mobile: '01722539108',
    address: {
        city: 'Dhaka',
        country: "Bangladesh"
    }
}

const data = JSON.stringify(objdata)

fs.writeFile('test.json', data, (err) => {
    if (err) {
        console.log('error');
    } else {
        console.log('Sucessfully File write');
    }
})