var fs=require('fs');

fs.readFile('fs/Hello World.txt',function (error,data) {
    if(error){
        console.log('读取文件失败');
    }else{
        console.log(data.toString());
    }
})