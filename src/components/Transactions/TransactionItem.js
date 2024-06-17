import React from 'react';
import axios from 'axios';

function TransactionItem({ transaction }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/transactions/${transaction.id}`);
      // Optionally, handle successful deletion, e.g., by removing the item from the UI
    } catch (err) {
      console.error('Failed to delete transaction');
    }
  };

  return (
    <
