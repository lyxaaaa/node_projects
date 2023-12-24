const express = require('express')

const app = express()

app.get('/response', (req,res) => {
    // 原生响应设置
    /*res.statusCode = 500
    res.statusMessage = 'wrong'
    res.setHeader('aaa', 'bbb')
    res.end('hello')*/

    //express框架的响应设置
    res.status(500)
    res.set('aaa', 'bbb')
    res.send('你好 express')
    // 可连贯 res.status(500).set('aaa', 'bbb').send('hello')

    //其他响应
    //路由响应 重定向
    //res.redirect('http://www.baidu.com')
    //下载响应
    //res.download('./package.json')
    //json响应
    // res.json({
    //     name: 'jack',
    //     location: 'America'
    // })
    //文件内容响应
    //res.sendFile(__dirname + '/_form.html')
})

app.listen(666, () => {
    console.log('service is working.')
})