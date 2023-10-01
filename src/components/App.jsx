import React from "react";

import friends from "data/friends.json"
import { FriendList } from "components/FriendList/FriendList";

export const App = () => {
  // return <FriendList friends={data} />;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FriendList friends={friends} />
    </div>
  );
};
