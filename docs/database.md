# Note

| name | type | limit | nullable | description |
|:----|:------|:------|:---------|:------------|
| noteId | ObjectId | Unique:true | false | 게시글ID, 1부터 시작하여 글작성 시마다 1 증가 |
| author | string | Min:1 Max:20 Unique:false | false | 글 작성자 |
| pw | string | Min:1 Max:30 Unique:false | false | 글 비밀번호 |
| title | string | Min:1 Max:50 Unique:false| false | 글 제목 |
| content | string | Min:1 Max:1000 Unique:false | false | 글 내용 |
| createdAt | Date | default:today Unique:false | false | 글 작성 날짜 |


# Comment
| name | type | limit | nullable | description |
|:----|:------|:------|:---------|:------------|
| noteId | ObjectId |  |  | FK |
| commentId | ObjectId | Unique:true | false | 댓글ID, 각 글 마다 1로 시작하여 댓글 달릴 때마다 1 증가 |
| author | string | Min:1 Max:20 Unique:false | false | 댓글 작성자 |
| content | string | Min:1 Max:200 Unique:false | false | 댓글 내용 |
| createdAt | Date | default:today Unique:false | false | 댓글 작성 날짜 |