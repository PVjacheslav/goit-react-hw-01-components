import React from "react";
import { ListItem, NameItem, StatusItem } from "./FriendListItem.styled";

// console.log(styles)
export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <ListItem >
            <StatusItem $isOnline={isOnline}/>
            <img src={avatar} alt="User avatar" width="48" height="48"/>
            <NameItem>{name}</NameItem>
        </ListItem>
    );
};
