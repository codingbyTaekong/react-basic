import React from "react";

function CreateUser({username, email, onChange, onCreate}) {
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