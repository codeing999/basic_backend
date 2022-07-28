const express = require("express");
const Comment = require("../schemas/comment.js");
const router = express.Router();

router.post("/", async (req, res) => {    //댓글 작성.
    const { noteId, commentId, author, content } = req.body;
    console.log('d');
    const comment = await Comment.find( {noteId, commentId});
    if (comment.length) {
        return res.status(400).json( { success : false, erroMessage: "이미 있는 데이터입니다."});
    }
    const createcomment = await Comment.create( { noteId, commentId, author, content, createdAt:Date.now()});
    res.json({ comment : createcomment});
});

router.get("/:noteId", async (req, res)=> {
    const { noteId } = req.params;
    const comment = await Comment.find( {noteId} ).sort( {createdAt : -1});
    res.json({
        comment,
    });
});

router.put("/:noteId/:commentId", async (req, res)=>{
    const { noteId, commentId } = req.params;
    const { content} = req.body; 
    const comment = await Comment.find({ noteId, commentId });  
    console.log(noteId, commentId, content)
    if (comment.length) {   
        if (content.length){
            const putcomment = await Comment.findOneAndUpdate({ noteId:noteId, commentId:commentId}, {content:content }, {new : true}); //, {new : true}) 이거까지 명시해주면 업데이트 후껄 리턴.
            res.json({ comment: putcomment });
        } else{
            res.send("댓글 내용을 입력해주세요"); 
        }
    }else {
        res.send("없는 데이터입니다."); 
    }
});

router.delete("/:noteId/:commentId", async (req, res)=>{
    const { noteId, commentId } = req.params;
    const comment = await Comment.find({ noteId, commentId });  
    if (comment.length) {   
        const deletecomment = await Comment.findOneAndDelete( {noteId:noteId, commentId:commentId}); 
        res.json({ comment: deletecomment }); 
    }else {
        res.send("없는 데이터입니다."); 
    }
});

module.exports = router;