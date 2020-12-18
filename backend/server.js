require('dotenv').config()

const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

/* --------------------------------------- */
// Rutas:

app.get('/', (req, res) => {
    res.send("Bienvenido a la API");
    console.log("/ hit using GET");
})

app.get('/api/obra', (req, res) => {
    try{

    }catch(err){
        console.log("error ");
    }
})




/* --------------------------------------- */

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server up. Port ${port}`);
});

