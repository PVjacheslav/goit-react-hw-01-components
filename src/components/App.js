import { React, Component } from 'react';

import initialUser from 'data/data.json';
import initialChatFriends from '../data/friends.json';
import initialTransaction from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export class App extends Component {
  state = {
    userCard: initialUser,
    chatFriends: initialChatFriends,
    tabTransaction: initialTransaction,
  };

  render() {
    const { userCard } = this.state;
    const { chatFriends } = this.state;
    const { tabTransaction } = this.state;

    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Profile user={userCard} />
        <FriendList friends={chatFriends} />
        <TransactionHistory items={tabTransaction} />
      </div>
    );
  }
}
