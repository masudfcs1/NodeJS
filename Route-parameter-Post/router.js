const router = require('express').Router()

router.get('/login', (req, res) => {
    res.send("<h1>This is Login Route.</h1>")
    req.url

})


router.get('/signup', (req, res) => {
    res.send("<h1>This is Login Route.</h1>")
})


router.get('/about', (req, res) => {
    res.send("<h1>This is About Route.</h1>")
})

router.get('/contact', (req, res) => {
    res.send("<h1>This is Contact Route.</h1>")
})

module.exports = router