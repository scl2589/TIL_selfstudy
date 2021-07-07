import React from 'react';
import Hello from './Hello';

function App() {
  //JSX 규칙 
  // 4. 괄호는 필수가 아니다. 그러나 가독성을 위해 사용한다. 
  return (
    // 2. 2개 이상의 태그가 있다면, 하나의 태그로 감싸져야 한다. 
    <div>
      {/* 1. 태그는 꼭 닫아야 한다. */}
      <Hello />
      
      <input/>

      {/* 3. 감싸기 애매할 때는 Fragment를 사용해도 된다. Fragment: <> */}
      <>
      </>
    </div>
  );
}

export default App;
