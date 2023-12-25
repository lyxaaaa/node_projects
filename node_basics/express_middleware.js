const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

//静态资源中间件设置
//app.use(express.static(__dirname + '/public'))

//创建全局中间件函数，可复用
//此函数作用是获取访问日志
function recordMiddleware(req, res, next){
    let {url, ip} = req
    fs.appendFileSync(path.resolve(__dirname , './access.log'), `url is ${url}   ip is ${ip}\r\n`)
    //执行后续路由操作
    next()
}

//使用中间件函数
app.use(recordMiddleware)

//创建一个路由中间件，使得用户访问时必须携带token，假设值为‘xyz’
const routerMiddleware = (req, res, next) => {
    if(req.query.token === 'xyz'){
        next()
    }
    else{
        res.send('no permission')
    }
}

//传入路由中间件
app.get('/home', routerMiddleware, (req, res) => {
    res.send('home page')
})

app.get('/admin', routerMiddleware, (req, res) => {
    res.send('admin page')
})

app.listen(666, () => {
    console.log('express_middleware started!')
})