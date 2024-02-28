import React, { useState } from "react";
import Header from "./Header";
import { mockReceipt } from "./mock";

function Transfer() {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockReceipt = {
      transactionId: "123456",
      date: "2024-02-28",
      status: "SUCCESS",
    };

    setReceipt(mockReceipt);
    setShowReceipt(true);
  };

  const handleCancel = () => {
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
        {showReceipt && (
          <div>
            <p>To Address - {toAddress}</p>
            <p>From Address - {fromAddress}</p>
            <p>Amount - {amount}</p>
            <p>TransactionId - {receipt.transactionId}</p>
            <p>Status - {receipt.status}</p>
            <p>Date - {receipt.date}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Transfer;
