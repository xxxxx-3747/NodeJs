var fs=require('fs');

fs.writeFile('fs/xxxx.txt','NodeJS GOOD！！！',function (error) {
    if(error){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
});