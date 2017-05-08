
const express = require('express');
const app = express();
require('dotenv');
const path = require('path');

const PORT = 3000
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get("/", (req,res)=> {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, ()=>{
  console.log("listening on port ", PORT)
})
