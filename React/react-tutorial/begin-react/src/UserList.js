import React from 'react';

function User({ user, onRemove, onToggle }) {
    // return (
    //     <div>
    //         <b>{user.username}</b><span> ({user.email})</span>
    //         <button onClick={ () => onRemove(user.id)}>삭제</button>
    //     </div>
    // )

    // 위처럼 매번 user. 으로 코드를 쓰는게 귀찮다면 미리 추출을 해주는 방법이 있다. 
    const {username, email, id, active} = user;
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

