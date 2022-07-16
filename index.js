const express = require("express")

const app = express();
const {Read} = require("./api/operation")
const {con} = require("./lib/database")

const cors = require("cors")

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