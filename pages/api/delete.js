import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

async function handler (req, res) {
    
    
    if(req.method==="POST"){

        const session = await getServerSession(req, res, authOptions);
        const db = ( await connectDB ).db('forum')
        const result = await db.collection('post').findOne({_id: new ObjectId( req.body)})

        if(result.writer === session.user.email){

            await db.collection('post').deleteOne({_id: new ObjectId(req.body)})

            console.log("삭제 완료")

            return res.status(200).redirect("/list");
        }
        else{
            console.log("삭제 불가")
            return res.status(200).redirect("/list");
        }
    }
}


export default handler;