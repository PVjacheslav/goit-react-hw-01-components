import React from "react";
import { FriendListItem } from "components/FriendList/FriendListItem";

export const FriendList = ({ friends }) => {
    console.log(friends)
return <ul className="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
</ul>
}