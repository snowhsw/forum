import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function Detail(props) {

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})

    // console.log(props.params.id)
    
    return(
        <div>
            <h4>{}</h4>
            <h4>글제목</h4>
            <p>글내용</p>
        </div>
    )
}

export default Detail