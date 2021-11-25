import React, { useRef, useState } from "react";
import UserList from "./UserList";

function InputSample() {
    const nameInput = useRef();
    const [inputs, setInputs] = useState({
        name : "",
        displayName : ""
    });

    const {name, displayName} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name] : value
        })
    }
    const onClick = (e)=> {
        setInputs({
            ...inputs,
            name: "",
            displayName : ""
        })
        nameInput.current.focus()
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="displayName" placeholder="닉테임" onChange={onChange} value={displayName}/>
            <button onClick={onClick}>초기화</button>
            <div>값 : </div>
        </div>
    )
}

export default InputSample;