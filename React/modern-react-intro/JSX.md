# JSX

- 작성일: 2021-07-15

# JSX 규칙

1. 태그는 꼭 닫혀야 한다.

    ```jsx
    <div>태그는 꼭 닫자 :) </div>
    <Hello/> // 태그와 태그 사이에 별도의 내용이 없다면 좌측과 같이 작성해도 좋다. 
    ```

2. 두개 이상의 태그는 감싸야 한다.

```jsx
<>
	<div>div1</div>
	<p>p1</p>
</>
```

- 감싸기 애매할 때는 Fragment를 사용해도 된다. Fragment: <>
- Fragment는 의미없는 div가 추가되는 것을 피하기 위해 사용한다.

3. JS값을 JSX 내부에서 보여주고 싶다면, 중괄호 `{}`를 사용한다.

```jsx
const name = 'Lin'
return <div>안녕하세요, {name}님 </div>
```

4. JSX 내부에서 style을 사용하는 방법

- style을 이용하려면 객체를 만들어야 한다.

```jsx
const style = {
	background: 'gray',
}

return (
	<div style={style}>
		<div className="my-style">
			style과 className
		</div>
	</div>
)
```

5. 주석을 작성하는 방법.

```jsx
return (
	<div>
		{/*주석 다는 방법 */}
		<input 
			//이런 방식도 가능하다.
		/>
	</div>
)
```

# 예시

```jsx
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
```