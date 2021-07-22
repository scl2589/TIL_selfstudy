import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const {username, email, id, active} = user;
    useEffect(() => {
        console.log('User 값이 설정됨')
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전'); 
            console.log(user); 
        }
    }, [user]); // user를 dependency 배열에 넣으면, 이 값이 설정(mount될 때도 포함)되거나 바뀔때마다 호출이 된다.
    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span> ({email})
            </span>
            {/* onClick에서 새로운 함수를 호출 하는 이유. 클릭했을 때 onRemove 함수를 호출 할 것이라는 것을 의미한다. */}
            <button onClick={ () => onRemove(id)}>삭제</button>
            {/* 아래 처럼 작성하면 컴포넌트가 불러와질 때 onRemove 함수가 바로 호출된다. */}
            {/* <button onClick={onRemove(id)}>삭제</button> */}
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                // key가 꼭 필요하다. re-rendering 성능을 좋게 해준다. 
                users.map(
                    (user) => (
                        <User 
                            user={user} 
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    )
}

export default UserList;

