import React from 'react';
import { useLocation } from 'react-router-dom';

const Transactions = () => {
 const location = useLocation();
 const transfer = location.state?.transfer;

 return (
    <div>
      {transfer ? (
        <div>
          <h2>Transfer Details</h2>
          <p>From: {transfer.fromAddress}</p>
          <p>To: {transfer.toAddress}</p>
          <p>Amount: {transfer.amount}</p>
        </div>
      ) : (
        <p>No transfer details available.</p>
      )}
    </div>
 );
};

export default Transactions;
