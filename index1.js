const express = require('express');
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');
const cors = require('cors')
const app = express();
const path = require('path');


const dbpath = path.join(__dirname,"signupdetails");
let db = null;

app.use(cors());

const initial = async ()=>{
try{
    db= await open({
        filename:dbpath,
        driver:sqlite3.Database
    });
    app.listen(3002);
    console.log("server running at 3002 port")
}
catch (e){
console.log("error");
process.exit(1);
}

};
initial();


app.get("/signup",async (req,res)=>{
    const query1 = `select * from signupdetails;`;
    const res13 = await db.all(query1);
  res.send(res13)
  res.status(200);
  
    console.log(res13);

})





module.exports = app;