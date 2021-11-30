import React from 'react';

function Error({user}) {
    // if (!user) return null;
    return (
        <div>
            <div>
                <b>ID</b> : {user.id}
            </div>
            <div>
                <b>Username: </b>{user.username}
            </div>
        </div>
    )
}

export default Error;