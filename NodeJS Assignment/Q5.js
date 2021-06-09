
var fs=require('fs');
var arguments = process.argv;
fs.readFile('test.txt', 'utf8' , (err, data) => {
    
    var data1 = data.split(" ");
    data1.sort();
    var current = arguments[2];
    var cnt = 0;
    for (var i = 0; i < data1.length; i++) {
        if (data1[i] == current) {
            cnt++;
        }    
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }
 	 });