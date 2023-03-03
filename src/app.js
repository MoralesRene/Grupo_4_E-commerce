const express = require("express");
const path = require("path")
const methodOverride = require('method-override')
const home = require('../src/routes/home')
const login = require('../src/routes/login')
const register = require('../src/routes/register')
const product = require('../src/routes/products')
const cart = require('../src/routes/cart')
const app = express();


const publicPath = path.join(__dirname, "/public");

//Utilización de rutas
app.use(express.static(publicPath))
app.use("/", home)
app.use('/login', login)
app.use('/register', register)
app.use('/product', product)
app.use('/cart', cart)
app.use(methodOverride('_method'))

app.use((req,res,next) => {
res.status(404).render("not-found")
})

//Motor de plantilla
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

//Definicion de puertos y apertura de servidor
const port = 3030;
app.listen(port, () => {
    console.log("Server Started on http://localhost:" + port)
})
