import React, { useRef } from 'react';
import UserList from './UserList'
import './App.css';

function App() {
  const users = [
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
  ]  

  const nextId = useRef(4); // 초기값을 4로 한다. 
  const onCreate = () => {
    console.log(nextId.current); // 4 
    
    // 값을 바꾸고 싶을 때는?? - oncreate 함수를 실행할 때 마다 nextId를 사용한다. 
    nextId.current += 1; 
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
