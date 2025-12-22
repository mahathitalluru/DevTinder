const express = require("express");
const app = express();
app.use("/test",(req,res) => {
    res.send("Hello from the server");
});
app.use("/namaste",(req,res) => {
    res.send("Hello from the servers");
});
app.use("/",(req,res) => {
     res.send("Welocome to dev tinder");
})
app.get("/test");

app.listen(3000,()=>{
  console.log("server is successfully listening on 3000")
});