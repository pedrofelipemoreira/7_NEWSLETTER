import {Product} from '../models/Product.js';

import {response} from 'express'; 

const ProductModel = Product;

const productController = {
    
    showProduct: async(req, res) =>{
        try {
            
            const products = await ProductModel.find().lean();
            
            res.render('products/all', {products})

        } catch (error) {
            console.log(error);
        }
    },


    createProduct: async(req, res) =>{
        try {

            res.render('products/create');

        } catch (error) {
            console.log(error);
        }

    },

    create: async(req, res) =>{
        try { 
            
            const product = {
                title: req.body.title,
                image: req.body.image,
                description: req.body.description,
            };

            console.log(product);

            const response = await ProductModel.create(product);

            //await response.save();

            //res.status(201).Json({response, msg: "Produto criado com sucesso"});

            res.redirect('/products');

        } catch (error) {
            console.log(error);
        }


    },

    getProduct: async(req, res) =>{
        try {
            
            const id = req.params.id;
            const product = await ProductModel.findById(id).lean();
            res.render('products/product', {product})

        } catch (error) {

            console.log(error)
            
        }

    },


    deleteProduct: async(req, res) =>{

        try {
            
            const id = req.params.id;

            const deleteProduct = await ProductModel.findByIdAndDelete(id);

            console.log(deleteProduct);

            res.redirect('/products')

        } catch (error) {
            console.log(error);
        }


    },

    editProduct: async(req, res) =>{
        try {
            
            const id = req.params.id;
            const product = await ProductModel.findById(id).lean();

            res.render('products/edit', {product})

        } catch (error) {
            console.log(error);
        }
    },

    editProductUpdate: async(req, res) =>{

        try {
            const id = req.body.id;

            const product = {
                title: req.body.title,
                image: req.body.image,
                description: req.body.description,
            };

            const updateProduct = await ProductModel.findByIdAndUpdate(id, product);

            res.redirect('/products');

            
        } catch (error) {
            console.log(error)
        }


    },


}

export default productController;


  /* export default class ProductController{
    static showProduct(req, res){
        res.render('products/all')
    }

    static createProduct(req, res) {
        res.render('products/create')
    }



    static async createProductPost(req, res) {
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        const product = new Product({name, image, price, description});

        await product.save();

        res.redirect('/products')
    } 

    static async getProduct(req, res){
        const id = req.params.id;

        const product = await Product.getProductById(id);

        res.render('products/product', {product})

    }


    static async deleteProduct(req, res){
        const id = req.params.id;

        await Product.removeProductById(id);

        res.redirect('/products')

    }


    static async editProduct(req, res){
        const id = req.params.id;

        const product = await Product.getProductById(id);

        res.render('products/edit', {product})

    }

    static async editProductPost(req, res){
        const id = req.body.id;
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;

        const product = new Product(name, image, price, description);

        await product.updateProduct(id);

        res.redirect('/products')

    }


}    */