import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  // 스타일을 넣고 싶다면 객체를 만들어야 한다.
  const style = {
    backgroundColor: 'black', 
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  //JSX 규칙 
  // 4. 괄호는 필수가 아니다. 그러나 가독성을 위해 사용한다. 
  return (
    // 2. 2개 이상의 태그가 있다면, 하나의 태그로 감싸져야 한다. 
    <div>
      {/* 1. 태그는 꼭 닫아야 한다. */}
      <Hello />
      
      <input/>
      {/* 스타일은 다음과 같이 적용한다. */}
      <div style={style}>{name}</div>
      {/* App.css 스타일의 class와 연동시키기 위해 className을 사용한다. */}
      <div className="gray-box"></div>
      {/* 3. 감싸기 애매할 때는 Fragment를 사용해도 된다. Fragment: <> */}
      <>
      </>
    </div>
  );
}

export default App;
