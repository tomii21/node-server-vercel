const mysql = require("mysql")

module.exports = function Read(con, callback){
    con.query("select * from nombre", function(err, result){
        if(err){
            console.log(err)

        }
        callback(result);
        
        
    })
}

 

module.exports = function Insert(con, callback){
    con.query("insert into prod values('producto1')", function(err, result){
        if(err){
            console.log(err)

        }
        callback(result);
        
        
    })
}

 