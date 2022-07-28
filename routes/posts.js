const express = require("express");
const Note = require("../schemas/post.js"); 
const router = express.Router();

router.post("/", async (req, res) => {
    const { author, pw, title, content} = req.body;   
    const note = await Note.find().sort({noteId: -1}).limit(1);
    let noteId = 0; 
    if (note.length) {
        noteId = note[0].noteId+1;
    } else {
        noteId = 1;
    }
    const createnote = await Note.create({ noteId, author, pw, title, content, createdAt:Date.now() }); 
    
    res.json({ note: createnote });
});

router.get("/:noteId", async (req, res) => {
    const { noteId } = req.params;

    const [note] = await Note.find({ noteId: Number(noteId) }).select('-pw -__v -_id -noteId'); 
    res.json({
        note
    });

    
    

});

router.get("/", async (req, res) => {
    const note = await Note.find().select( '-pw -content -__v -_id -noteId' ).sort( {createdAt : -1} ); 
    res.json({
        note 
    });
});

router.put("/:noteId", async (req, res) => {    
    const { noteId } = req.params;
    const { pw, title, content} = req.body; 
    const note = await Note.find({ noteId, pw });  
    if (note.length) {   
        const putnote = await Note.findOneAndUpdate({ noteId:noteId}, {title:title, content:content }, {new : true}); 
        res.json({ note: putnote });
         
    }else {
        res.send("없는 데이터입니다."); 
    }
    
});

router.delete("/:noteId", async (req, res) => {
    const { noteId } = req.params;
    const { pw} = req.body; 
    const note = await Note.find({ noteId, pw });  
    if (note.length) {   
        const deletenote = await Note.findOneAndDelete( {noteId:noteId}); 
        res.json({ note: deletenote }); 
    }else {
        res.send("없는 데이터입니다."); 
    }
});

module.exports = router;