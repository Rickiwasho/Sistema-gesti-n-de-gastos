const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const err = "hola puta te equivocaste man";
// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({message: err});
    }
});
// SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err){
        res.json({message: err});
    }
});

//SPECIFIC POST
router.get('/:postId', (req, res) => {
    console.log(req.params.postId);
});
// tengo un puto error y no puedo conectar con la base de datos por la mierda 
// quedé en el minuto 40 del video
module.exports = router;