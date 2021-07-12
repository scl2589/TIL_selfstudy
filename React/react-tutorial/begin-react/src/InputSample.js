import React, {useState} from 'react';

function InputSample() {
    // 객체 형태의 state 관리
    const [inputs, setInputs] = useState({
        // 각각의 state에 대한 기본값을 설정해준다.
        name: '',
        nickname: '',
    });

    // name과 nickname 값을 쉽게 사용할 수 있도록 비구조화 할당을 통해 추출해준다. 
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({ 
            // 기존의 name과 nickname이 현재상태의 자리로 온다. -> 기존의 객체를 복사해온다. 
            ...inputs,
            // 특정 값을 덮어 씌운다. -> 대괄호로 감싸면 실제 name 값이 무엇을 가리키고 있는지에 따라 다른 key 값이 변경된다. 
            // 예를 들어 name이 name이면 name이 바뀌는거고, name이 nickname이면 nickname 값이 변경된다.
    
            [name]: value
        })

        // nextInputs[name] = value;
        // setInputs(value);
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    }

    return (
        <div>
            {/* 코드의 가독성을 위해 여러 줄에 걸쳐 태그를 작성한다 */}
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample