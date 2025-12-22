const express = require("express");
const app = express();
// app.use("/test",(req,res) => {
//     res.send("Hello from the server");
// });
// app.use("/namaste",(req,res) => {
//     res.send("Hello from the servers");
// });
app.get("/user/:userId/:userName/:userRole",(req,res) => {
    console.log(req.params);
    res.send({FirstName:"Mahathi", lastName:"Talluru"});
});
app.get("/user",(req,res)=>{
    console.log(req.query);
    res.send({FirstName:"Mahathi",LastName:"Talluru"})
});

// app.get("/test");

app.listen(3000,()=>{
  console.log("server is successfully listening on 3000")
});