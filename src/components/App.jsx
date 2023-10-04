import React from "react";

import data from "data/data.json"
import friends from "data/friends.json"
import transaction from "data/transactions.json"
import user from "data/user.json"

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
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
      
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
