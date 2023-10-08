import { React, Component } from 'react';

import initialUser from 'data/user.json';
import initialStatistisTab from 'data/data.json';
import initialChatFriends from '../data/friends.json';
import initialTransaction from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import { StatisticData } from './Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export class App extends Component {
  state = {
    userCard: initialUser,
    statisticTab: initialStatistisTab,
    chatFriends: initialChatFriends,
    tabTransaction: initialTransaction,
  };

  render() {
    const { userCard } = this.state;
    const { statisticTab } = this.state;
    const { chatFriends } = this.state;
    const { tabTransaction } = this.state;

    return (
      <div>
        <Profile
          username={userCard.username}
          tag={userCard.tag}
          location={userCard.location}
          avatar={userCard.avatar}
          stats={userCard.stats}
        />
        <StatisticData stats={statisticTab} />
        <FriendList friends={chatFriends} />
        <TransactionHistory items={tabTransaction} />
      </div>
    );
  }
}
