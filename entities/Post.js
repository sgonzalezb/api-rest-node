const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    quality: {
        type: Number,
        require: true
    },

})

module.exports = mongoose.model("Posts", PostSchema);