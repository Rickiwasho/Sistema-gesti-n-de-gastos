require('dotenv').config()

const db = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

/* --------------------------------------- */
// Rutas:

app.get('/', (req, res) => {
    res.send("Bienvenido a la API");
    console.log("/ hit using GET");
})

app.get('/api/obra', async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM obras ORDER BY id;");
        res.status(200).json({
            status: "success",
            obras: results.rows,
        });
    }catch(err){
        console.log("error ");
    }
});

app.get('/api/obra/:id', async (req, res) => {
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

app.put('/api/obra/:id', async (req, res) => {
    try{
        const results = await db.query(
            "UPDATE obras SET nombre=$1, ubicacion=$2 WHERE id=$3 returning *;", [req.body.nombre, req.body.ubicacion, req.params.id]);
        res.status(200).json({
            status: "success",
            obras: results.rows,
        });
    }catch(err){
        console.log("error ");
    }
});

app.delete('/api/obra/:id', async (req, res) => {
    try{
        const results = await db.query(
            "DELETE FROM obras WHERE id=$1;", [req.params.id]);
        res.status(200).json({
            status: "success",
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

