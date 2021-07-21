import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b><span> ({user.email})</span>
        </div>
    )
}

function UserList({users}) {
    return (
        <div>
            {
                // key가 꼭 필요하다. re-rendering 성능을 좋게 해준다. 
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;

