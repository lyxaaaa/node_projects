//导入express
const express = require('express')

//创建应用
const app = express()

//创建路由
// GET方法 路径为 /home
app.get('/home', (request, response) => {
    response.end('hello express!')
})

// GET方法 路径为 /
app.get('/', (request, response) => {
    response.end('home page')
    console.log(request.get('host'))
})

// GET方法 路径为 /:id id为占位符
app.get('/:id.html', (request, response) => {
    response.end('product detail')
    console.log(request.params.id)
})

// POST方法 路径为 /test
app.post('/test', (req, res) => {
    res.end('this is a test.')
})

// 适配所有方法
app.all('/login', (req, res) => {
    res.end('this is login page.')
})

// 通常用来响应404 适应所有方法及上述不匹配的路径
app.all('*', (req, res) => {
    res.end('404 Not Found!')
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('service is started.')
})