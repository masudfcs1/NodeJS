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

const data = JSON.stringfy(objdata)