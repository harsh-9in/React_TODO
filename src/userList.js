import React from 'react';

const Userlist = (props) => {
    return (
        <div>
            <ul>
                {props.users.map( user=> <li>{user.name} {user.age }</li>)}
            </ul>
        </div>
    );
}

export default Userlist;
