const fs = require("fs");

fs.readFile(process.argv[2], 'utf8',(err, data) => {
    if (data[0]) console.log(data.split('\n').length - 1); else console.error("Error:", err)
})