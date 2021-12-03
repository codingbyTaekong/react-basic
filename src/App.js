/* eslint-disable */
import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
  createContext,
} from 'react';
import Counter from './components/Counter';
import CreateUser from './components/CreateUser';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import useInputs from './components/useInputs';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성사용자를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'kumi7214',
      email: 'kumi7214@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'mickey2mouse',
      email: 'mickey2mouse@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'bigchoi',
      email: 'bigchoi@pict.kr',
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   inputs: initialState.inputs,
    //   users : state.users.concat(action.user)
    // }
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map(user => (
    //     user.id === action.id ? {...user, active : !user.active} : user
    //   ))
    // }
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter(user=> user.id !== action.id)
    // }
    default:
      throw new Error('Unhandled Action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  // useState로 구현
  const useS = () => {
    //   const [input, setInput] = useState({
    //     username : "",
    //     email : ""
    //   })
    //   const {username, email} = input;
    //   const [users,setUsers] = useState([
    //     {
    //         id : 1,
    //         username : "kumi7214",
    //         email : "kumi7214@gmail.com",
    //         active : true
    //     },
    //     {
    //         id : 2,
    //         username : "mickey2mouse",
    //         email : "mickey2mouse@naver.com",
    //         active : false
    //     },
    //     {
    //         id : 3,
    //         username : "bigchoi",
    //         email : "bigchoi@pict.kr",
    //         active : false
    //     }
    // ])
    // const nextId = useRef(4);
    // // useCallback 함수 재사용을 통해 랜더링 최적화를 도와줌
    // // useCallback(함수, 뎁스)
    // const onChange = useCallback(e => {
    //   const {name, value} = e.target;
    //   setInput({
    //     ...input,
    //     [name] : value
    //   });
    // }, [input]);
    // const onCreate = useCallback(() => {
    //   setInput({
    //     username : '',
    //     email : ''
    //   })
    //   const user = {
    //     id : nextId.current,
    //     username : username,
    //     email : email
    //   };
    //   setUsers(users=>users.concat(user));
    //   nextId.current += 1;
    // }, [username, email]);
    // const onRemove = useCallback((id) => {
    //   setUsers(users => users.filter(user=> user.id !== id));
    // }, [])
    // const onToggle = useCallback((id) => {
    //   setUsers(users => users.map(user => user.id === id ? {...user, active: !user.active} : user))
    // }, [])
    // // useMemo Hook
    // // 파라미터 안의 뎁스가 변경이 일어날 때만 리랜더링 하는 최적화 기법
    // const count = useMemo(()=>countActiveUsers(users), [users]);
  };
  // useReduce로 구현
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [form,onChange, reset] = useInputs({
  //   username : '',
  //   email : ''
  // })
  // const {username,email} = form;
  const { users } = state;
  // const nextId = useRef(4)
  // const onCreate = useCallback(e=> {
  //   dispatch({
  //     type: "CREATE_USER",
  //     user : {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   })
  //   nextId.current += 1;
  //   reset()
  // }, [username, email, reset])
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
      // username={username}
      // email={email}
      // onChange={onChange}
      // onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      {/* <Counter/> */}
    </UserDispatch.Provider>
  );
}

export default App;
