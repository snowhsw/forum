const SignUp = () =>{
    return(
        <form method="POST" action="/api/signup">
            <h4>아이디</h4>
            <input type="text" name="title" /> <br/>
            <h4>비번</h4>
            <input type="text" name="content" /><br/>
            <input type="submit" value="제출" />
        </form>
    )
}


export default SignUp