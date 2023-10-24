import  express  from 'express';
const router = express.Router();

import productController from '../controllers/productController.js';

router.route('/create')
.get((req, res) => productController.createProduct(req, res));


router.route('/create')
.post((req, res) => productController.create(req, res));


router.route('/remove/:id')
.post((req, res) => productController.deleteProduct(req, res));


router.route('/edit')
.post((req, res) => productController.editProductUpdate(req, res));


router.route('/edit/:id')
.get((req, res) => productController.editProduct(req, res));


router.route('/:id') 
.get((req, res) => productController.getProduct(req, res));


router.route('/')
.get((req, res) => productController.showProduct(req, res));


export default router;