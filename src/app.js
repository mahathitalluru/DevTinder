const express = require("express");
const app = express();
// app.use("/test",(req,res) => {
//     res.send("Hello from the server");
// });
// app.use("/namaste",(req,res) => {
//     res.send("Hello from the servers");
// });
// app.get("/user/:userId/:userName/:userRole",(req,res) => {
//     console.log(req.params);
//     res.send({FirstName:"Mahathi", lastName:"Talluru"});
// });
// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send({FirstName:"Mahathi",LastName:"Talluru"})
// });

// app.get("/test");
app.get("/test",(req,res,next)=>{
    console.log("Handling the route user");
    // res.send("First Response");
    next();
},
(req,res,next) => {
  console.log("Handling the second response");
  // res.send("second response");
  next();
},
(req,res) => {
  console.log("Handling the second response");
  res.send("Third response");
});

app.listen(3000,()=>{
  console.log("server is successfully listening on 3000")
});