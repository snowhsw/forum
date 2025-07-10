'use client'
import DetailLink from "./DetailLink";
import Link from "next/link";
const ListItem = ({ result }) => {
    return (
        <>
            {
                result.map(r =>
                    <div className="list-item" key={r._id}>
                        <Link href={`/detail/${r._id}`}>
                            <h4>{r.title}</h4>
                            <p>{r.content}</p>
                        </Link>
                        <DetailLink id={r._id} />
                    </div>
                )
            }
        </>
    )
}

export default ListItem