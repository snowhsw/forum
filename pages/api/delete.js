import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function handler (req, res) {

    if(req.method==="POST"){
        try{
            const db = ( await connectDB ).db("forum");
            await db.collection("post").deleteOne({_id: new ObjectId(req.body)})
            
            return res.status(200).json("삭제 완료")
        }
        catch (error) {
            return res.status(500).json("삭제 살패")
        }
        
    }
}


export default handler;