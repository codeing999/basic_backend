# Note

| Method, URL | Description | Method | request | response |
|:------------|:------------|:-------|:--------|:---------|
| POST /note | 게시글 작성
| GET /note/:noteId | 게시글 조회, 댓글 목록 조회
| GET /note | 전체 게시글 목록 조회, 댓글 목록 조회
| PUT /note/:noteId | 게시글 수정
| DELETE /note/noteId | 게시글 삭제

# Comment
| Method, URL | Description | Method | request | response |
|:------------|:------------|:-------|:--------|:---------|
| POST /comment/:noteId | 댓글 작성
| GET /comment/:noteId | 댓글 목록 조회
| PUT /comment/:noteId/:commentId | 댓글 수정
| DELETE /comment/:noteId/:commentId | 댓글 삭제