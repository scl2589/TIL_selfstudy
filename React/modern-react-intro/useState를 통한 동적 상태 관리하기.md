# useState를 통한 동적 상태 관리하기

- React 16.8 이전 버전에서는 함수형 컴포넌트는 state 상태를 관리할 수 없었다. 그 이후부터는 state가 생겨나 관리할 수 있게 되었다.

# 이벤트 설정하기

## 이벤트가 발생했을 때 특정 함수 호출하는 법

```jsx
import React from 'react';

function Counter() {
    const onIncrease = () => {
        console.log('+1');
    }

    const onDecrease = () => {
        console.log('-1');
    }

    return (
        <div>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
```

- 함수를 다음과 같은 형태로 onClick시, 컴포넌트에 넣는다.

    ```jsx
    <button onClick={onIncrease}>+1</button>
    ```

- 주의할 점

    ```jsx
    <button onClick={onIncrease()}>+1</button>
    ```

    - 이런식으로, onIncrease() 함수를 작성한다면 화면이 렌더링 될 때 바로 함수를 호출하므로 주의해야 한다.
    - 우리는 클릭 됐을 때 해당 함수를 호출하고 싶으므로 위와 같이 사용을 하지 않는다.

## 동적인 상태 끌고오기

- import 하기
    - `import React, {useState} from 'react';`
- state 만들기

    ```jsx
    import React, { useState } from 'react';

    function Counter() {
        // number라는 상태를 만드는데, 이 상태의 기본 값을 0으로 하겠다라는 의미이다.
        // setNumber는 number 상태를 바꿔주는 함수이다. 
        const [number, setNumber] = useState(0);
        
    }

    export default Counter;
    ```

    - number, setNumber
        - number = 상태
        - setNumber = 현재 상태를 업데이트 하는 함수이다.

    - 여기서, `const [number, setNumber] = useState(0);` 는 아래 코드와 동일한 것이다.

        ```jsx
        const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberSTate[1];
        ```

        - 배열 비구조화 할당을 통해 위와 같은 코드로 작성한다.

## 상태값 바꾸기

```jsx
import React, { useState } from 'react';

function Counter() {
    // number라는 상태를 만드는데, 이 상태의 기본 값을 0으로 하겠다라는 의미이다.
    // setNumber는 number 상태를 바꿔주는 함수이다. 
    **const [number, setNumber] = useState(0);**

    const onIncrease = () => {
        // console.log('+1');
        **setNumber(number + 1);**
    }

    const onDecrease = () => {
        // console.log('-1');
        **setNumber(number - 1);**
    }

    return (
        <div>
            <h1>**{number}**</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
```

# useState를 사용할 때 함수형 업데이트를 하는 방법

```jsx
const onIncrease = () => {
        // console.log('+1');
        // setNumber(number + 1);

        // 기존의 값을 가져와서, 어떻게 바꿀지 정의할 수 있다.
        setNumber(prevNumber => prevNumber + 1);
    }
```

- 값을 어떻게 업데이트 할 것이다 라고 함수형 로직을 넣을 수 있다.