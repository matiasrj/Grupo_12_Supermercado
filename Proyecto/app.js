const express = require('express');

const path = require('path');

// Routers import
const usersRoutes =  require('./routers/users')
const productsRoutes = require('./routers/products')

const app = express();

// Ejs
app.set('view engine', 'ejs')

// PORT
const port= 3001;

// carpeta publica.
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath))



// Routes
app.use('/users',usersRoutes);
app.use('/products',productsRoutes);



app.get('/', (req,res)=>{
    res.render( path.resolve(__dirname,'views/Home'));
})


// app.get('/carrito', (req,res)=>{
//     res.render(path.resolve(__dirname ,'views/products/ProductCart'));
// });

// app.get('/detalles', (req,res)=>{
//     res.render(path.resolve(__dirname ,'views/products/ProductDetail'));
// });

// app.get('/login', (req,res)=>{
//     res.render(path.resolve(__dirname ,'views/users/Login_prov'));
// });


// app.get('/register', (req,res)=>{
//     res.render(path.resolve(__dirname ,'views/users/Register_prov'));
// });


app.listen(port, ()=>{
    console.log(` Servidor activado en el puerto ${port}`)
})

