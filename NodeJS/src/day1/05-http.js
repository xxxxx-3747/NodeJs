var  http=require('http');

var server=http.createServer();

server.on('request',function () {
    console.log('发送了一个请求');
})

server.listen(8888,function () {
    console.log('服务器启动成功');
})