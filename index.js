const express = require('express');
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');
const cors = require('cors')
const app = express();
const path = require('path');


const dbpath = path.join(__dirname,"productdet");
let db = null;

app.use(cors());

const initial = async ()=>{
try{
    db= await open({
        filename:dbpath,
        driver:sqlite3.Database
    });
    app.listen(3001);
    console.log("server running at 3000 port")
}
catch (e){
console.log("error");
process.exit(1);
}

};
initial();


app.get("/gets1",async (req,res)=>{
    const query1 = `select * from productdetails;`;
    const res12 = await db.all(query1);
  res.send(res12)
  res.status(200);
  
    console.log(res12);

})

app.get("/gets1/:id/",async (req,res)=>{
  const {id}= req.params
    const query1 = `select * from productdetails where id=${id};`;
    const res12 = await db.get(query1);
  res.send(res12)
  res.status(200);
  
    console.log(res12);

})



module.exports = app;