import React from 'react';
import TransactionForm from './Transactions/TransactionForm';
import TransactionList from './Transactions/TransactionList';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default Dashboard;
