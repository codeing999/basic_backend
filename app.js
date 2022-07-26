const express = require("express");
const connect = require("./schemas"); //index.js는 명시 안해줘도 안적으면 그걸 찾음.
const app = express();
const port = 3000;

connect();

const noteRouter = require("./routes/posts.js");
const commentRouter = require("./routes/comments.js");

app.use(express.json()); //미들웨어가 생기는데 바디에 들어오는 json형태 데이터를 파싱해줌. 이거 안해주면 바디에 보내도 아무것도 안보낸게됨.
const requestMiddleware = ((req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
    }
);

app.use(requestMiddleware); 

app.use("/note", noteRouter); 
app.use("/comment", commentRouter);

app.get("/", (req, res) => {
    res.send("hello");
});


app.listen(port, () => {
    console.log(port, "서버 켜짐");
});