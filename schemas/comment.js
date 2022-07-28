const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    noteId : {
        type : Number,
        required : true,
        unique : false
    },
    commentId : {
        type : Number,
        required : true,
        unique : false
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    content: {
        type: String,
        required: true,
        unique: false
    },
    createdAt: {
        type: Date,
        required: true,
        unique: false,
    }
});

module.exports = mongoose.model("Comment", commentSchema); 