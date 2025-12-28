const express = require("express");
const connectdB = require("./config/database.js");
// const User = require("./models/Users.js");
const Users = require("./models/Users.js");
// const mongodb = require("mongodb");
// const uri ="mongodb+srv://mahathitalluru:Chowdary2718@@nodejs.ihrvwun.mongodb.net/?appName=NodeJS";

const app = express();
app.use(express.json());

// app.post("/Signup",async(req,res)=>{
//   const user = new User(req.body);
//   try{
//     await user.save();
//     res.send({message:"User created successfully"});
//   }
//   catch(err){
//     res.status(400).send("Error creating user:"+ err.message);
//   }
// });
// app.get("/users",async(req,res)=>{
//   // const userEmail = req.body.email;
//   try{
//     await users.find();
//     res.send({message:"Users fetched successfully"});
//   }
//   catch(err){
//     res.status(400).send("Error fetching user:"+ err.message);
//   }
// });
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });
// app.get("/users",async(req,res)=>{
//   const userEmail = req.body.email;
//   console.log(req.body.email);
 
//   try{
//     const users = await Users.find({email:userEmail});
//      if(users.length===0){
//      res.status(404).send("No users found");
//   }
//   else{
//     res.send(users);
//   }
//   }
//   catch(err){
//     res.status(400).send("Error fetching user:"+ err.message);  
//   }
// });
app.get("/users", async(req,res)=>{
  const userId = req.query._id;
  console.log(userId);
  try{
    const users = await Users.findByIdAndDelete(userId);

    if(!users){
      res.status(404).send("User not found");
    } else{
res.send("user deleted successfully");
    }  
  }
  catch(err){
    res.status(400).send("Error fetching user:"+ err.message);  
  }         
});
// app.get("/users", async (req, res) => {
//   const userId = req.query._id;
//   const user = await Users.findById(userId);
//   res.json(user);
// });


// app.get("/users",async(req,res)=>{
//   const userEmail = req.body.email;

//   try {
//    const users = await User.find({email:userEmail});
//    res.send(users);
//     res.send({message:"User fetched successfully"});
//   }
//   catch(err){
//     res.status(400).send("Error fetching user:"+ err.message);
//   }

// });




// const user = new User({
//     firstName:"Aditya",
//     lastName:"M",
//     email:"adityaM.2000@gmail.com",
//     password:"Chowdary2718"
// });
// try{
// await user.save();
// res.send({message:"User created successfully"});
// }
// catch(err){
// res.status(400).send("Error creating user:"+ err.message);
// }
// });
// const {adminAuth,userAuth} = require("./middleware/auth.js");
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

// app.get("/",(err,req,res,next) => {
//   try{
//     throw new Error("Something went wrong");
//   }
//   catch(error){
//     // res.send("error");
//     next();
//   }
// });

// app.get("/admin/getAllData",(req,res) => {
//   res.send("admin data sent")
// });
// app.get("/admin/deleteUser",(req,res) => {
//   res.send("user deleted successfully")
// });
// app.use("/admin",adminAuth);
connectdB().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed", err);
});
app.listen(3000,()=>{
  console.log("server is successfully listening on 3000");
});