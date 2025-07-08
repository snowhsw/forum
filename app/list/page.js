import { connectDB } from "@/util/database";
import Link from "next/link";
export default async function List() {


    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();

    console.log(result)
    return (
        <div className="list-bg">
            {result.map(r =>
                <div className="list-item" key={r._id}>
                    <Link href={`/detail/${r._id}`}>
                        <h4>{r.title}</h4>
                        <p>{r.content}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}

// export default List