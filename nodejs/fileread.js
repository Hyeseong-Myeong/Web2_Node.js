var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, Data){
    console.log(Data);
})