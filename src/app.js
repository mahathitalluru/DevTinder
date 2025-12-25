const express = require("express");
// const mongodb = require("mongodb");
// const uri ="mongodb+srv://mahathitalluru:Chowdary2718@@nodejs.ihrvwun.mongodb.net/?appName=NodeJS";

const app = express();
const {adminAuth,userAuth} = require("./middleware/auth.js");
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
// app.get("/test",(req,res,next)=>{
//     console.log("Handling the route user");
//     // res.send("First Response");
//     next();
// },
// (req,res,next) => {
//   console.log("Handling the second response");
//   // res.send("second response");
//   next();
// },
// (req,res) => {
//   console.log("Handling the second response");
//   res.send("Third response");
// });

app.get("/",(err,req,res,next) => {
  try{
    throw new Error("Something went wrong");
  }
  catch(error){
    // res.send("error");
    next();
  }
});

// app.get("/admin/getAllData",(req,res) => {
//   res.send("admin data sent")
// });
// app.get("/admin/deleteUser",(req,res) => {
//   res.send("user deleted successfully")
// });
// app.use("/admin",adminAuth);
app.listen(3000,()=>{
  console.log("server is successfully listening on 3000")
});