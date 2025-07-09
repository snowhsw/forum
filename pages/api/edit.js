import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

async function hanlder (req,res){
    if(req.method === "POST"){
        if(req.body.title.trim().length !== 0 && req.body.content.trim().length !== 0 ){
            const db = ( await connectDB ).db("forum")
            await db.collection('post').updateOne({ _id: new ObjectId(req.body._id)},
            {$set: {title: req.body.title, content: req.body.content}})
            return res.status(200).redirect(`/list`)
        }
        else{
            return res.status(200).json(req.body.content + req.body.title)
        }
        
    }
    else{
        return res.status(500).json("잘못된 요청")
    }
}

export default hanlder