// src/Transactions.js
import React from "react";

const Transactions = () => {
  // Mock data for transactions
  const transactions = [
    // Add more transactions as needed
  ];

  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.from} to {transaction.to} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
