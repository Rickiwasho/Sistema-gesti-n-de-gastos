const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');


app.use(bodyParser.json());
// import routes

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// routes
app.get('/', (req, res) => {
    res.send('Hello!');
});



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser: true }, 
() => console.log('Connected!'));

// how to start listening to the server
app.listen(8000); 