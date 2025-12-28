const mongoose = require('mongoose');
const connectdB = async () => {
    await mongoose.connect("mongodb+srv://namastenode:Chowdary2718@namastenode.ayag9vg.mongodb.net/devTinder?appName=NamasteNode");
};
module.exports = connectdB;
// connectdB().then(() => {
//     console.log("Database connected successfully");
// }).catch((err) => {
//     console.error("Database connection failed", err);
// });