const express = require('express')
const path = require('path')

const app = express()

//设置模板引擎 ejs
app.set('view engine', 'ejs')

//设置模板文件的存放位置 （模板文件☞具有模板语法内容）
app.set('views', path.resolve(__dirname, './ejs/views'))

//创建路由
app.get('/home', (req, res) => {
    let greeting = 'hello, world!'
    res.render('home', {greeting})
})

app.all('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('port 3000 is running...')
})