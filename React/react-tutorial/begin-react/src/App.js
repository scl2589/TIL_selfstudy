import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper.js';
import './App.css';

function App() {
  return (
    <Wrapper>
      {/* isSpecial = {true} 로 설정할 때, true 또한 JS 값이기 때문에 중괄호로 감싸줘야 한다. */}
      <Hello name="react" color="red" isSpecial={true}/>
      {/* isSpecial처럼 값을 지정하지 않는다면, true로 지정한 것과 동일하다. */}
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
