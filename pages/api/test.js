function handler (req, res) {
    if(req.method === "POST"){
        return res.status(200).json(req.body.txt)
    }
} 

export default handler;