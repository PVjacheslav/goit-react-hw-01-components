import {
  List,
  ListItem,
  Picture,
  ProCard,
  Quantity,
  Title,
  Wrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProCard>
      <Wrapper>
        <Picture src={avatar} alt="User avatar" width="64" height="64" />
        <Title>{username}</Title>
        <p>@{tag}</p>
        <p>{location}</p>
      </Wrapper>

      <List>
        <ListItem>
          <span>Followers:</span>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <span>Views:</span>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <span>Likes:</span>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </List>
    </ProCard>
  );
};
