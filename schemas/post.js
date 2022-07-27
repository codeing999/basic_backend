const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteId: {
    type: Number,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
    unique: false
  },
  pw: {
    type: String,
    required: true,
    unique: false
  },
  title: {
    type:String, 
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

module.exports = mongoose.model("Note", noteSchema); //모델 이름은 Note로 해서 export. 이걸 routes/posts.js에서 가져다 쓰게할 거.