import React from 'react';
import Profile from './Profile/Profile';
import user from './user.json';
import Statistics from './Statistics/Statistics';
import statisticsData from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friendsData from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/Transaction.json';
import styles from './TransactionHistory/TransactionHistory.module.css';

const App = () => (
  <div className={styles.transactionHistoryApp}>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
