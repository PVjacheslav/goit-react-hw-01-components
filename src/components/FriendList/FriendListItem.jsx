import React from "react";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className="item" style={{
            display: "flex",
            padding: 10
        }}>
            <span className="status" style={{

                width: 10,
                height: 10,
                background: "green",
                borderRadius: 5
            }
            }></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" height="48"/>
            <p className="name">{name}</p>
        </li>
    );
};
