const express = require('express')

const app = express()

/*
防盗链：服务端对客户端的url检测，如果非某个允许的网址则不返回对应资源
原理：对请求报文中referer检测
*/

//全局中间件
app.use((req, res, next) => {
    let referer = req.get('referer')
    if(referer){
        let url = new URL(referer)
        let hostname = url.hostname
        console.log(hostname)
        if(hostname !== '127.0.0.1'){
            res.status(404).send('404 not found')
            return
        }
    }
    next()
})

app.get('/source', (req, res) => {
    res.send('source page')
})

app.listen(3000, () => {
    console.log('anit-hotlinking is running...')
})