const express = require("express");
const Note = require("../schemas/post.js"); //저 파일에서 내보냈던 스키마를 참조. 모델은 보기쉽게 대문자 추천. 소문자인 다른 변수쓸때 겹칠수도있고.
const router = express.Router();

router.post("/", async (req, res) => {
    //const author = req.body.author; //하나씩 받아올 때 이런식. get을 제외한 포스트, 풋, 딜리트 이런애들은 바디를 가져올수가있다. 
    //const {author} = req.body; //이런식으로 {}로 감싸서 해도 됨.
    const { noteId, author, title, content, createdAt } = req.body; //한꺼번에 가져오기.
    const note = await Note.find({ noteId })  //find 함수가 promis를 반환해서. await 쓸수있게 위에 async 써야함.
    if (note.length) {   //note에 아무것도 안담겨와서 길이가 0일 때. 즉 못찾았을 때
        return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });    //여기서 리턴한 이유는 실패시 밑에꺼 실행안하기위함. else쓰면 더 길어지니까 return해도 아무 상관없을 때는 짧게 코딩하는거.
    }   //실패할 때도 200 ok.를 보내버리는데 400으로 보내기위해 저사이에 .status(400) 추가. 
    const createnote = await Note.create({ noteId, author, title, content, createdAt }); //create는 모델을 만들고 insert까지 해주는 함수.
    res.json({ note: createnote });
});

router.get("/:noteId", async (req, res) => {
    const { noteId } = req.params;

    let [note] = await Note.find({ noteId: Number(noteId) }); //하나가 아닐수있기에 []로 감싼거.
    res.json({
        note
    });

});

router.get("/", async (req, res) => {
    const note = await Note.find(); //promise객체로 내보니지기때문에 await 써야함.
    res.json({
        note,
    });
});

router.put("/", (req, res) => {

});

router.delete("/", (req, res) => {

});

module.exports = router;