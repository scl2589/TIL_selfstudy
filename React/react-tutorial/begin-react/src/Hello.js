import React from 'react';

function Hello({color, name}) {
    // style 바로 다음의 중괄호는 -> JS 값이기에 중괄호로 객체를 감싼다. 
    // 그 다음 중괄호는 객체를 위한 중괄호이다.
    return <div style={{
        color
    }}>안녕하세요 {name}</div>
}


// 기본값 설정
Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;