let operatingSystem = require('os');

// console.log(operatingSystem.platform());//win32
// console.log(operatingSystem.arch());//x64
// console.log(operatingSystem.cpus().length);//8
// console.log(operatingSystem.uptime());


let fileSystem = require('fs');

fileSystem.writeFile('autoGenerateFile.txt','This is the file that got generated automatically with the fs.writefile function\n',function(){
    console.log("file has been created");
})


fileSystem.appendFile('autoGenerateFile.txt','This is the easy way\n',function(){
    console.log("file has been appened");
})

