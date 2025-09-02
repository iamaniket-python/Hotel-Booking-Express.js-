const express=require("express");
const app= express();
const mongoose =require("mongoose");
const Listing =require("./models/listing.js");
const path = require("path")
const methodOverride =require("method-override")



// ----------------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// -------------------------------------------------------------




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
// --------------------------------------------------------
app.get("/",(req, res)=>{
    res.send("hii sonali");
})
// --------------------------------------------------------
// New listing form
app.get("/listings/new", (req, res) => {
    res.render("listing/new");   
});
// ----------------------------------------------------
// #index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listing/index", { allListings });
});
//  create route
// ----------------------------------------------------
app.post("/listings",async(req ,res)=>{
    const newListing =new Listing(req.body.listing);
    await newListing.save()
    res.redirect("/listings");
});
// -----------------------------------------------------------
// show route
app.get("/listings/:id", async(req,res)=>{
    let {id} =req.params;
    const lisiting =await Listing.findById(id);
     res.render("listing/show", { lisiting });
})
// ---------------------------------------------------------------
// Edit ROute
app.get("/listings/:id/edit",async(req,res)=> {
    let {id} =req.params;
    const listing =await Listing.findById(id);
    res.render("listings/edit", { listing });

})
// ----------------------------------------------------------------------
// update route
app.put("/listings/:id",async(req,res)=> {
   let {id} =req.params;
   await Listing .findByIdUpdate(id,{...req.body.listing});
   res.redirect(`/listings/${id}`);
});
// ------------------------------------------------------------------------
//  delete
app.delete("/listing/:id",async(req, res)=>{
    let {id} =req.params;
    let deletedListing =await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});
// ---------------------------------------------------------------------------
app.listen(8080,()=>{
    console.log("Running succesfully  to port 8080")
})