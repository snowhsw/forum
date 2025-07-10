'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink = ({ id }) => {

    // 경로 이동
    const router = useRouter();

    //	"/posts/123"
    // let a = usePathname();

    //	객체로 sort=asc, page=2 등을 조회 가능
    // let b = useSearchParams();

    // console.log(a)
    // console.log(b)

    return (
        <>
            {/* 특정 이동 */}
            <button onClick={() => router.push('/')}>이동</button>
            {/* 앞으로 가기 */}
            <button onClick={() => router.forward()}>앞으로 가기</button>
            {/* 뒤로가기 */}
            <button onClick={() => router.back()}>뒤로가기</button>
            {/* 새로고침 */}
            <button onClick={() => router.refresh()}>새로고침</button>
            {/* 페이지 미리로드 */}
            <button onClick={() => router.prefetch('/')}>페이지 미리로드</button>
            {/* 수정 */}
            <button onClick={() => router.push(`/edit/${id}`)}>수정</button>
            {/* 삭제 */}
            <button onClick={(e) => {
                // URL파라미터 문법
                fetch('/api/abc/asdawdasdasd')
                //쿼리스트링
                // fetch('api/test?name=asd&age=7').then()

                // 삭제요청 POST요청만 body에 값을 넣을 수있음 GET 요청은 안돼
                // fetch("/api/delete", {
                //     method: "POST",
                //     body: id
                // })
                // .then(()=>{
                //     e.target.parentElement.style.opacity="0"
                //     setTimeout(()=>{
                //         e.target.parentElement.style.display="none"
                //     }, 1000)
                // })

                // 에러처리
                // .then((r) => {
                //     if (r.status == 200) {
                //         return r.json()
                //     } else {
                //         //서버가 에러코드전송시 실행할코드
                //     }
                // })
                // .then((result) => {
                //     //성공시 실행할코드
                // }).catch((error) => {
                //     //인터넷문제 등으로 실패시 실행할코드
                //     console.log(error)
                // })
            }}
            >삭제
            </button>
        </>
    )
}

export default DetailLink;