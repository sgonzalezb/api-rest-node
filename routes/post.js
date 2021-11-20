const express = require("express");
const router = express.Router();
const Post = require("../entities/Post");

// FIND ALL
router.get("/", async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts)
        res.status(200);
    } catch (error) {
        res.json({ message: error })

    }
})

//FIND ONE
router.get("/:postId", async (req, res) => {

    try {
        const post = await Post.findById(req.params.postId);
        res.status(200);
        res.json(post);
        console.log("El objecto indicado es: ", post)

    } catch (error) {
        res.json({ message: error })
    }

})

//INSERT ONE
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        quality: req.body.quality
    });


    try {
        const savedPost = await post.save();
        res.status(200)
        res.json(savedPost);

    } catch (error) {
        res.json({ mesasge: error })
    }
})

//DELETE ONE 
router.delete("/:postId", async (req, res) => {


    try {

        const post = await Post.deleteOne({ _id: req.params.postId })
        // res.message("El objeto ha sido eliminado ")
        res.status(200);
        res.json(post)
        console.log("Document removed")

    } catch (error) {
        res.json({ message: error })
    }
})

//DELETE ALL 
router.delete("/", async (req, res) => {
    try {

        const post = await Post.deleteMany();
        console.log("All documents have been removed")
        res.json(post);
        res.status(200);

    } catch (error) {
        res.json({ message: error })
    }
})

//UPDATE ONE
router.patch("/:postId", async (req, res) => {
    try {
        const post = await Post.updateOne(
            { _id: req.params.postId },
            { title: req.body.title })

        console.log("The document has been updated ")
        res.json(post);
        res.status(200);

    } catch (error) {
        res.json({ message: error })
    }
})

//UPDATE ALL
router.patch("/", async (req, res) => {

    try {
        const posts = await Post.updateMany({}, {
            quality: req.body.quality
        })

        res.json(posts)
        res.status(200)

    } catch (error) {
        console.log(error)
        res.json({ message: error })
    }
})


module.exports = router;