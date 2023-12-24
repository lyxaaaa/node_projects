//导入http模块
const http = require('http')

//创建服务对象
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    //获取请求方法 解构赋值
    let { method } = request
    //获取请求的URL路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    //根据请求的路径 来返回不同的内容
    /*
        设置响应体有end和write两种方法
        response.end有且仅有一个
        response.write可以多次调用
    */
    if(method=='GET' && pathname=='/login') response.end('welcome back！这是登录页面')
    else if(method=='GET' && pathname=='/register') response.end('Hello！这是注册页面')
    else if(method=='GET' && pathname=='/secret') response.end('你发现了隐藏页面')
    else response.end('node 永远滴神!!!')
})

//监听对象 启动服务
server.listen(9000, () => {
    console.log('9000端口监听中...')
})