import React, { useState } from "react";
import Header from "./Header";
import { mockReceipt } from "./mock";
import Receipt from "./Receipt";

function Transfer() {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  const mockReceipt = {
    transactionHash: "123456",
    date: "2024-02-28",
    status: "SUCCESS",
    gasUsed: "2222",
    blockHash: "dsfg$5234",
    blockNumber: "42"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    setReceipt(mockReceipt);
    setShowReceipt(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowReceipt(false);
    setReceipt(null);
    setFromAddress("");
    setToAddress("");
    setAmount("");
  };
  return (
    <div>
      <Header title="Transfers" />
      <form onSubmit={handleSubmit}>
        <label>From Address</label>
        <select onChange={(e) => setFromAddress(e.target.value)}>
          <option>0xb84</option>
          <option>0x91e</option>
        </select>
        <br />
        <label>To Address</label>
        <select onChange={(e) => setToAddress(e.target.value)}>
          <option>0x1s4</option>
          <option>0x7we</option>
        </select>
        <br />
        <label>Amount</label>
        <input type="text" onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit">SUBMIT</button>
        <br />
        <button onClick={handleCancel}>Cancel</button>
        {/* {showReceipt && (
          <div>
            <p>To Address - {toAddress}</p>
            <p>From Address - {fromAddress}</p>
            <p>Amount - {amount}</p>
            <p>TransactionId - {receipt.transactionId}</p>
            <p>Status - {receipt.status}</p>
            <p>Date - {receipt.date}</p>
          </div>
        )} */}
        {showReceipt ?
          <Receipt
            toAddress={toAddress}
            fromAddress={fromAddress}
            amount={amount}
            transactionHash={mockReceipt.transactionHash}
            gasUsed={mockReceipt.gasUsed}
            blockHash={mockReceipt.blockHash}
            blockNumber={mockReceipt.blockNumber}
          /> : <h1>Please Enter the details</h1>
        }
      </form>
    </div>
  );
}

export default Transfer;
