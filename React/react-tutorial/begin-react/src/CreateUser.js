import React from 'react';

// onChange = input 값이 바뀌게 될 때 호출할 이벤트 처리 함수
// onCreate = 버튼을 눌렀을 때 새로운 항목을 등록해주는 함수 
function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input 
                name="username" 
                placeholder="계정명" 
                onChange={onChange} 
                value={username}
            />
            <input 
                name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);