import React from 'react';
import FriendList from './FriendList/FriendList.js';
import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
