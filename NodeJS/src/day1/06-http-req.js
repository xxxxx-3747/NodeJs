var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.url == '/') {
        response.write('/');
        response.end();
    } else if (request.url == '/index') {
        response.write('登录');
        response.end();
    } else if (request.url == '/register') {
        response.write('注册');
        response.end();
    } else {
        response.write('没啦，别看了');
        response.end();
    }
})

server.listen('8888', function () {
    console.log('服务器启动');
})







