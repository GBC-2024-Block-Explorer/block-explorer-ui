import React, { useState } from "react";
import Header from "./Header";
import Receipt from "./Receipt";
import { faker } from "@faker-js/faker";

const source = [];
const destination = [];
const blockNumber = faker.number.int({ min: 10, max: 100 });
const gasUsed = faker.finance.amount({ min: 1000, max: 9999, dec: 0 });
const transactionHash = faker.git.commitSha();
const blockHash = faker.git.commitSha();
for (let i = 0; i < 5; i++) {
  source.push(faker.finance.ethereumAddress());
  destination.push(faker.finance.ethereumAddress());
}

function Transfer() {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  // const [receipt, setReceipt] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  // const mockReceipt = {
  //   transactionHash: "123456",
  //   date: "2024-02-28",
  //   status: "SUCCESS",
  //   gasUsed: "2323",
  //   blockHash: "dsfg$5234",
  //   blockNumber: "42",
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setReceipt(mockReceipt);
    setShowReceipt(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowReceipt(false);
    // setReceipt(null);
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
          <option value=""></option>
          {source.map((address, index) => (
            <option>{address}</option>
          ))}
        </select>
        <br />
        <label>To Address</label>
        <select onChange={(e) => setToAddress(e.target.value)}>
          <option value=""></option>
          {destination.map((address, index) => (
            <option>{address}</option>
          ))}
        </select>
        <br />
        <label>Amount</label>
        <input type="text" onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit">SUBMIT</button>
        <br />
        <button onClick={handleCancel}>Cancel</button>
        
        {showReceipt ? (
          <Receipt
            toAddress={toAddress}
            fromAddress={fromAddress}
            amount={amount}
            transactionHash={transactionHash}
            gasUsed={gasUsed}
            blockHash={blockHash}
            blockNumber={blockNumber}
          />
        ) : (
          <h1>Please Enter the details</h1>
        )}
      </form>
    </div>
  );
}

export default Transfer;
