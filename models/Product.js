import mongoose from "mongoose";

const {Schema} = mongoose; 

const productSchema = new Schema({

        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true} 
)

const Product = mongoose.model('Product', productSchema);

export {Product, productSchema};