# Note

| Method, URL | Function | request | response | Description |
|:------------|:---------|:--------|:---------|:------------|
| POST /note | 게시글 작성 | { </br> "author" : "글쓴이", </br> "pw" : "12345", </br> "title" : "글제목", </br> "content" : "글내용" </br> } | 생성한 글 내용 | |
| GET /note/:noteId | 게시글 조회 | | { </br> "note":{ </br> "author":"글쓴이", </br> "title":"글제목", </br> "content":"글내용", </br> "createdAt":"2022-07-28T06:17:51.111Z" </br> } </br> } |  |
| GET /note | 전체 게시글 목록 조회 |  | { </br> "note" : [ </br> { </br> "author":"", </br> "title":"", </br> "createdAt":"2022-07-28T07:31:16.913Z" </br> }, </br> { </br> "author":"", </br> "title":"", </br> "createdAt":"2022-07-28T07:31:16.913Z" </br> }, </br> ... </br> ] </br> } | 날짜로 내림차순 정렬 |
| PUT /note/:noteId | 게시글 수정 | { </br> "pw" : "12345", </br> "title" : "수정할 제목", </br> "content" : "수정할 내용" </br> } | 수정한 글 또는 "없는 데이터입니다." | |
| DELETE /note/noteId | 게시글 삭제 | { </br> "pw" : "12345" </br> } | 실패 시 "없는 데이터입니다." | |

# Comment
| Method, URL | Function | request | response | Description |
|:------------|:---------|:--------|:---------|:------------|
| POST /comment/:noteId | 댓글 작성 | { </br> "noteId" : 1, </br> "author" : "댓글작성자", </br> "content" : "댓글내용" </br> } | 댓글 내용 미입력 시 : "댓글 내용을 입력해주세요" | |
| GET /comment/:noteId | 댓글 목록 조회 |  | { </br> "comment": [ </br> { </br> "author" : "", </br> "content": "", </br> "createdAt": "2022-07-28T10:52:23.688Z" </br> }, </br> { </br> "author" : "", </br> "content": "", </br> "createdAt": "2022-07-28T10:52:22.634Z" </br> }, </br> ... </br> ] </br> } | |
| PUT /comment/:noteId/:commentId | 댓글 수정 | { </br> "content" : "수정할 댓글" </br> } | 수정된 댓글 </br> 수정 내용 미입력 시 : "댓글 내용을 입력해주세요" </br> 수정할 데이터를 못찾았을 시 : "없는 데이터입니다." | |
| DELETE /comment/:noteId/:commentId | 댓글 삭제 |  |  | |