import React from "react";
import { FriendListItem } from "components/FriendList/FriendListItem";
import styles from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    // console.log(friends)
return <ul className={styles.container}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
</ul>
}