import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import DetailLink from "@/app/list/DetailLink";


async function Detail(props) {

    const db = (await connectDB).db("forum");
    const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    console.log(result)

    
    return(
        <div>
            <h4>{result.title}</h4>
            <h4>{result.content}</h4>
            <p>글내용</p>
        </div>
    )
}

export default Detail