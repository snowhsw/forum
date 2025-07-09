'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink = ({id}) =>{

    // 경로 이동
    const router = useRouter();

    //	"/posts/123"
    // let a = usePathname();

    //	객체로 sort=asc, page=2 등을 조회 가능
    // let b = useSearchParams();
    
    // console.log(a)
    // console.log(b)

    return(
        <div>
            {/* 특정 이동 */}
            <button onClick={()=> router.push('/')}>이동</button>
            {/* 앞으로 가기 */}
            <button onClick={()=> router.forward()}>앞으로 가기</button>
            {/* 뒤로가기 */}
            <button onClick={()=> router.back()}>뒤로가기</button>
            {/* 새로고침 */}
            <button onClick={()=> router.refresh()}>새로고침</button>
            {/* 페이지 미리로드 */}
            <button onClick={()=> router.prefetch('/')}>페이지 미리로드</button>
            {/* 수정 */}
            <button onClick={()=> router.push(`/edit/${id}`)}>수정</button>
        </div>
    )
}

export default DetailLink;