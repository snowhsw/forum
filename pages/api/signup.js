import { connectDB } from "@/util/database";

async function handler (req, res) {
    if(req.method === "POST"){
        if(req.body.title.trim()==="" || req.body.content.trim()===""){
            return res.status(500).json("공백이 있습니다.");
        }
        else{
            const db = ( await connectDB ).db("forum");
            const result = await db.collection('post').findOne({ title: req.body.title})


            if(result){
                return res.status(500).json("중복아이디");
            }
            else{
                await db.collection('post').insertOne(req.body);
                return res.status(200).redirect("/list");
            }
        }
    }
}

export default handler;