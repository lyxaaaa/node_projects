const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//解析JSON格式的请求体的中间件
//const jsonParser = bodyParser.json()

//解析querystring格式请求体的中间件
const urlencoded = bodyParser.urlencoded({ extended: false })

/*
现在有这么一个需求：
GET 页面login 时，呈现登录页面
POST 页面login 时，获取用户登录数据：用户名、密码.页面呈现：hello + 用户名
*/

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.post('/login', urlencoded, (req, res) => {
    console.log(req.body)
    res.send('hello, ' + req.body.username)
})

app.listen(3000, () => {
    console.log('service is running...')
})