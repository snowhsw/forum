import { connectDB } from "@/util/database";
import ListItem from "./listItem";
export default async function List() {


    const db = (await connectDB).db("forum");
    const result = await db.collection('post').find().toArray();

    // _id가 특수 객체라서 클라이언트 컴포넌트로 넘길 때 문제가 되기 때문에 일반 id로 변경해줘
    const cleanData = result.map( r => ({...r, _id: r._id.toString()}))
    
    return (
        <div className="list-bg">
            < ListItem result={cleanData} />
        </div>
    )
}

// export default List