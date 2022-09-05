const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("<h1>This is Get .</h1>")
    req.url

})


router.post('/', (req, res) => {
    res.send("<h1>This is Post.</h1>")
})


router.delete('/', (req, res) => {
    res.send("<h1>This is Delete.</h1>")
})

router.put('/', (req, res) => {
    res.send("<h1>This is Put .</h1>")
})

module.exports = router