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

app.get('/api/obra', async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM obras;");
        res.status(200).json({
            status: "success",
            obras: results.rows,
        });
    }catch(err){
        console.log("error ");
    }
});

app.get('/api/obra/id/:id', async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM obras where id=$1;", [req.params.id]);
        res.status(200).json({
            status: "success",
            obras: results.rows,
        });
    }catch(err){
        console.log("error ");
    }
});

app.post('/api/obra/', async (req, res) => {
    try{
        const results = await db.query(
            "INSERT INTO obras (nombre, ubicacion) VALUES ($1, $2) returning *;", [req.body.nombre, req.body.ubicacion]);
        res.status(200).json({
            status: "success",
            obras: results.rows,
        });
    }catch(err){
        console.log("error ");
    }
});



/* --------------------------------------- */

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server up. Port ${port}`);
});

