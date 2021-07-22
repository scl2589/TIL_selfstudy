import React, { useState, useRef } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value, 
    })
  }

  const [users, setUsers]  = useState([
    {
        id: 1,
        username: 'Lin',
        email: 'lin@gmail.com'
    },
    {
        id: 2,
        username: 'Shin',
        email: 'shin@example.com'
    },
    {
        id: 3,
        username: 'Manfred',
        email: 'manfred@example.com'
    }
  ]);  

  const nextId = useRef(4); // 초기값을 4로 한다. 

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]) // spread 연산자를 사용하고, 새로운 user를 넣어주는 방법
    setUsers(users.concat(user)); // concat을 사용해 기존 users 배열에 새로운 user를 합친다. 

    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current); // 4 
    
    // 값을 바꾸고 싶을 때는?? - oncreate 함수를 실행할 때 마다 nextId를 사용한다. 
    nextId.current += 1; 
  }

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
