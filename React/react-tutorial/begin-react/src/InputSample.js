import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');


    // e는 이벤트 객체를 말한다.
    // 수정 이벤트가 발생했을 때, 그 이벤트에 대한 내용이 이벤트 객체, parameter로 받아와서 사용할 수 있다. 
    const onChange = (e) => {
         // e.target은 현재 input, 이벤트가 발생한 DOM 에 대한 정보를 가지고 있다. 
        // console.log(e.target.value);

        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample