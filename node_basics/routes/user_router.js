const express = require('express')

//创建路由对象
const router = express.Router()

router.get('/visitor', (req, res) => {
    res.send('<h1>visitor</h1>')
})

router.get('/admin', (req, res) => {
    res.send('<h1>admin</h1>')
})

module.exports = router
