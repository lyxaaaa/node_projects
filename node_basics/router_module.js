const express = require('express')
const basicRouter = require('./routes/user_router')

const app = express()

app.use(basicRouter)

//对于不匹配上述路由的URL 做404响应
app.all('*', (req, res) => {
    res.send('<h1>404 not found</h1>')
})

app.listen(3000, () => {
    console.log('service is running...')
})



