const mysql = require("mysql")

module.exports = function Read(con, callback){
    con.query("select * from nombres", function(err, result){
        if(err){
            console.log(err)

        }
        callback(result);
        
        
    })
}

 