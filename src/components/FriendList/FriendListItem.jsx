import React from "react";
import styles from "./FriendListItem.module.css"

console.log(styles)
export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={styles.item}>
            <span className={isOnline ? 'styles.status.green' :'styles.status.green' }
                // statusType={isOnline}
                style={{

                width: 16,
                height: 16,
                background: "green",
                borderRadius: 8,
                marginLeft: 8
            }}
            />
            <img className="avatar" src={avatar} alt="User avatar" width="48" height="48"/>
            <p className={styles.name}>{name}</p>
        </li>
    );
};
