import React, { useState } from 'react';

function Counter() {
    // number라는 상태를 만드는데, 이 상태의 기본 값을 0으로 하겠다라는 의미이다.
    // setNumber는 number 상태를 바꿔주는 함수이다. 
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // console.log('+1');
        // setNumber(number + 1);

        // 기존의 값을 가져와서, 어떻게 바꿀지 정의할 수 있다.
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        // console.log('-1');
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;