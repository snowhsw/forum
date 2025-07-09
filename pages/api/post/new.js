import { connectDB } from "@/util/database"

async function handler (req, res){

    if(req.method === "POST"){
        if(req.body.title.trim() === "" || req.body.content.trim() === ""){
            return res.status(500).json("공백있어?")
        }
        else{
            try {
                const db = ( await connectDB).db('forum') 
                await db.collection("post").insertOne(req.body)
        
                res.status(302).redirect("/list")
        
            } catch (error) {
                alert("에러임다")        
            }

        }
    }

    
}

export default handler