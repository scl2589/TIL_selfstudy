import React, { Component } from 'react';

class Hello extends Component {
    // 클래스형에서 기본값을 설정하는 또다른 방법   
    static defaultProps = {
        name: '이름없음',
    }

    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

// function Hello({color, name, isSpecial}) {
//     // style 바로 다음의 중괄호는 -> JS 값이기에 중괄호로 객체를 감싼다. 
//     // 그 다음 중괄호는 객체를 위한 중괄호이다.
//     return (
//         <div style={{
//             color
//         }}>
//             {/* 삼항연산자 사용 - 값에 따라 보여줘야 하는 값이 다를 때 사용 */}
//             {isSpecial ? <b>*</b> : null}

//             {/* 삼항연산자 대신 더 간단한 방법 -> && 연산자 사용 */}
//             {isSpecial && <b>*</b>}

//             안녕하세요 {name}

//             {/* falsy한 값들은 나타나지 않는데, 0은 예외다 */} 
//             { undefined }
//         </div>
//     )
// }


// // 기본값 설정
// Hello.defaultProps = {
//     name: '이름없음'
// };



export default Hello;