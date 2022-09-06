const router = require('express').Router()

router.get('/:postId', (req, res) => {
    res.send("This is Login Route." + req.params.postId)


})


router.post('/:postId', (req, res) => {
    res.send("This is Post Route." + req.params.postId)
})


router.put('/:postId', (req, res) => {
    res.send("This is Put Route." + req.params.postId)
})

router.delete('/:postId', (req, res) => {
    res.send("This is Delete Route." + req.params.postId)
})

module.exports = router