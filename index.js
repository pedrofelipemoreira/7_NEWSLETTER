//I -D NODEMON EXPRESS EXPRESS-HANDLEBARS 

import express  from 'express';

import {engine} from 'express-handlebars'

import cors from 'cors';

const app = express();

import coon from './db/coon.js'
coon();

import productsRouter from './routes/productsRouter.js';

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(cors());

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRouter)

app.listen(3000, function(){
    console.log("Servidor Online!!");
});

