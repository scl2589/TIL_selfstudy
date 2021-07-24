import React, { useState, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs;
  // onChange 함수는 inputs가 바뀔 때만 함수가 새로 만들어지고,
  // 그렇지 않다면 기존에 만들어진 함수를
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value, 
    })
  }, [inputs]);

  const [users, setUsers]  = useState([
    {
        id: 1,
        username: 'Lin',
        email: 'lin@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'Shin',
        email: 'shin@example.com',
        active: false
    },
    {
        id: 3,
        username: 'Manfred',
        email: 'manfred@example.com',
        active: false
    }
  ]);  

  const nextId = useRef(4); // 초기값을 4로 한다. 

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]) // spread 연산자를 사용하고, 새로운 user를 넣어주는 방법
    setUsers(users => users.concat(user)); // concat을 사용해 기존 users 배열에 새로운 user를 합친다. 

    setInputs({
      username: '',
      email: ''
    });

    console.log(nextId.current); // 4 
    
    // 값을 바꾸고 싶을 때는?? - oncreate 함수를 실행할 때 마다 nextId를 사용한다. 
    nextId.current += 1; 
  }, [username, email]);

  const onRemove = useCallback(id => {
    // filter를 걸어서 각 user 객체를 확인해본다.
    // parameter로 받아온 id를 비교하고, 만약 만족하는 경우 새로운 배열을 만들어서, 배열에 넣고. 
    // 만족하지 않는 경우, 새로운 배열에 넣지 않는다. 
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user 
    ));
  }, []);

  const count = useMemo(() => countActiveUsers(users));

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count} </div>
    </>
  );
}

export default App;
