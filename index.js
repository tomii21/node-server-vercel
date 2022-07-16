const express = require("express")
const mysql = require("mysql")
const app = express();
const {Read} = require("./operation")

const cors = require("cors")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})
con.connect((err)=>{
    if(err){
        console.log(error);
    }
    else{
        console.log("conectado")
    }
})

app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
res.send("Hola")
})
app.post("/conectado", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

app.get("/read", (req,res)=>{
    Read(con, (result)=>{
        res.json(result);   
    })
})

app.listen(3001, function(){ console.log('Express listening on port', this.address().port); }); 