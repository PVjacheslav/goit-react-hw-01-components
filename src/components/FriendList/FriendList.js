import { List, ListItem } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ListItem key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </ListItem>
      ))}
    </List>
  );
};
