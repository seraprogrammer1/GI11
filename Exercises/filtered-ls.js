const fs = require("fs");
fs.readdir(process.argv[2], 'utf-8', (err, data) => {
    if (err) return console.error(err);
    data.forEach(element => {
        if (element.includes("." + process.argv[3])) 
        {
            console.log(element)
        }
    })
})