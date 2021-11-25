import React, {useRef, useContext} from "react";
import useInputs from "./useInputs";
import {UserDispatch} from "../App";
import { useCallback } from "react/cjs/react.development";

// function CreateUser({username, email, onChange, onCreate}) {
function CreateUser() {
    const dispatch = useContext(UserDispatch)
    const [form,onChange, reset] = useInputs({
        username : '',
        email : ''
    })
    const {username,email} = form;
    const nextId = useRef(4)
    const onCreate = useCallback(()=> {
        dispatch({
        type: "CREATE_USER",
        user : {
            id: nextId.current,
            username,
            email
        }
        })
        nextId.current += 1;
    }, [username, email, reset])
    return (
        <div>
            <input  name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            <button onClick={onCreate} >등록</button>
        </div>
    )
}

//컴포넌트 최적화
//선행 : 리랜더링 방지를 위해 useCallback으로 함수를 감싸준다.
export default React.memo(CreateUser);