import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
async function handler (req, res){

    

    const session = await getServerSession(req, res, authOptions)
    
    if(req.method === "POST"){
        //로그인 정보가 null이 아니면

        if(session){
            const db = ( await connectDB).db("forum");
            req.body.writer = session.user.email
            // console.log("==================")
            // console.log(req.body)
            const result = await db.collection('post').insertOne(req.body)

            return  res.status(200).json("1111")
            
        }
        //로그인 정보가 null이면
        else{
            return  res.status(200).json("2222")
        }
    }
    // if(session !== null){
        
    // }

        // if(req.method === "POST"){
        //     if(req.body.title.trim() === "" || req.body.content.trim() === ""){
        //         return res.status(500).json("공백있어?")
        //     }
        //     else{
        //         try {
        //             const db = ( await connectDB).db('forum') 
        //             await db.collection("post").insertOne(req.body)
            
        //             res.status(302).redirect("/list")
            
        //         } catch (error) {
        //             alert("에러임다")        
        //         }
    
        //     }
        // }
    // }

    
}

export default handler