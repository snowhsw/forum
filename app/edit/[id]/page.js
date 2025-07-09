import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import useHandle from "./chage";
async function Edit(props){

    const db = ( await connectDB).db("forum");
    const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    const [value,  handleChange] = useHandle()
    return(
        <>
            <input value={result.title}/> <br/>
            <input value={result.content}/>
        </>
    )
}

export default Edit