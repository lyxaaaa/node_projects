//导入http模块
const http = require('http')
//导入文件系统
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
    //读取响应的html文件
    let tableHtml = fs.readFileSync(__dirname + '/create_httpResponse.html')
    response.end(tableHtml)
})

//监听端口 启动服务
server.listen(9000, () => {
    console.log('server start in port 9000...')
})