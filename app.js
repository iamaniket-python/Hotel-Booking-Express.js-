const express=require("express");
const app= express();
const mongoose =require("mongoose");
const Listing =require("./models/listing.js");
const path = require("path")
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Connect Database
const MONGO_URL= "mongodb://127.0.0.1:27017/Hotelbooking";

main().then(()=>{
    console.log("Succesfully connected")
}).catch(err =>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/",(req, res)=>{
    res.send("hii sonali");
})

// #index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listing/index", { allListings });
});

// show route
app.get("/listings/:id", async(req,res)=>{
    let {id} =req.params;
    const lisiting =await Listing.findById(id);
     res.render("listing/show", { lisiting });
})

app.listen(8080,()=>{
    console.log("Running succesfully  to port 8080")
})