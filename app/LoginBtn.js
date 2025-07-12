'use client'
 
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
const LoginBtn = ({session}) =>{
    // console.log(session.user.image)
    return(
        <>
            {
                session
                ?<>
                    <Image src={session.user.image} alt="유저이미지" width={50} height={50}/> 
                    <span>{session.user.name}님 환영합니다.</span> 
                    <button onClick={()=> signOut()}>로그 아웃</button>
                </>
                :<button onClick={()=> signIn()}>로그인 버튼</button>
            }
        </>
    )
}


export default LoginBtn;