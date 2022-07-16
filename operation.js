const mysql = require("mysql")

function Read(con, callback){
    con.query("select * from nombres", function(err, result){
        if(err){
            console.log(err)

        }
        callback(result);
        
        
    })
}

module.exports = {Read};