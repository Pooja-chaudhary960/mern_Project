import express from "express";
import fs from "fs";
import config from "./config/config.js";
import productRoutes from './routes/productRoutes.js';



const app = express();

app.get("/",(req, res)=>{
    res.json({
        name:config.name,
        port: config.port,
        version: config.version,
        
    });
});

app.use('/products', productRoutes)

app.get('/products',(req,res)=>{
    const products = fs.readFileSync('./src/data/products.json',"utf8");
    res.json(JSON.parse(products));

});

app.get("/products",(req,res)=>{
    const products=["Samsung s24 ultra", "Iphone 14","Acer predator laptop"];
    res.json(products);
});

app.listen(config, ()=>{
    console.log(`Server running at port ${config}....`);
});

const profile ={
    name:"pooja",
    age:20,
    address:"Dang",
    email:"puja@gmail.com"
}

