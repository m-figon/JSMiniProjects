const fs = require('fs');
module.exports.append = (file,value) =>{
    fs.appendFile(file,value , function (err) {
        if (err) return console.log(err);
    });   
}
