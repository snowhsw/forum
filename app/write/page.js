const Write = () =>{
    return(
        <div className="p-20">
            <div>
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <input type="text" name="title" placeholder="글 제목"/>
                    <input type="text" name="content" placeholder="글 내용"/>
                    <button type="submit">버튼</button>
                </form>
            </div>
        </div>
    )
}

export default Write