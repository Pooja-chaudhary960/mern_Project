import express from "express";

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello Pooja");
})

app.get("/products",(req,res)=>{
    res.send("Samsung s24 altra")
})

app.listen(5000, ()=>{
    console.log("Server running at port 5000....");
});