import React,{useEffect, useContext} from "react";
import { UserDispatch } from "../App";

const User = React.memo(function User ({user}) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch)
    // 컴포넌트가 랜더링 될 때 한 번만 실행됨
    // props => state로 쓸 때
    // REST API
    // D3, Video.js
    // setInterval, setTimeout
    // useEffect(()=> {
    //     console.log("컴포넌트가 화면에 나타남")
    // },[])


    // 컴포넌트가 삭제될 때 실행됨
    //뒷정리함수
    //clearInterval, clearTimeout
    //라이브러리 인스턴스 제거
    // useEffect(()=> {
    //     return () => {
    //         console.log("컴포넌트가 화면에 사라짐")
    //     }
    // },[])

    //depth안의 상태가 업데이트, 랜더링, 삭제 될 때마다 실행
    // useEffect(()=> {
    //     console.log("user값이 설정됨")
    //     console.log(user)
    //     return ()=> {
    //         console.log("user값이 바뀌기 전")
    //         console.log(user)
    //     }
    // },[user])

    // API 통신 예시
    // useEffect(()=> {
    //     loadPost(username,urlSlug)
    // }, [username,urlSlug])
    
    return (
        <div>
            <b style={{color : active ? "green" : "black", cursor: 'pointer'}} onClick={()=> dispatch({type : 'TOGGLE_USER', id})}>{username}</b>&nbsp;<span> ({email})</span><button onClick={()=>dispatch({type: "REMOVE_USER", id})}>삭제</button>
        </div>
    )
})

function UserList ({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

// React.memo
// 랜더링된 컴포넌트를 재사용할 때
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);