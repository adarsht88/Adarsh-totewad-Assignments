if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }	
  
  var txt =  process.argv[2];
  var fs = require("fs");
  
  var writeStream = fs.createWriteStream("JournalDEV.txt");
  writeStream.write(txt);
  writeStream.end();