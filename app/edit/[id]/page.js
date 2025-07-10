import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import InputComponent from "./input";
async function Edit(props){

    const db = ( await connectDB).db("forum");
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})


    return(
        <form method="POST" action="/api/edit">
            <InputComponent none="block" init={result.title} placeholder="제목" name="title" /> 
            <InputComponent none="block" init={result.content} placeholder="내용" name="content" /> 
            <InputComponent none="none" init={result._id.toString()} placeholder="아이디" name="_id" /> 
            <button type="submit">수정완료</button>
        </form>
    )
}

export default Edit 