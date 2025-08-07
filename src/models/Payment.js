import mongoose from "mongoose";


 const paymentSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:[true, "Amount is required."],
    },
    currency:{
        type:String,
       
    },
    method:{
        type:String,
        required:[true, "Payment method is required."],
        enum:["cash", "card", "online"],
    },
    status:{
        type:String,
        default:"pending",
        required:["pending","completed","failed"]
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
    transactionId: String,
});

const model = mongoose.model("Payment", paymentSchema);

export default model;