import React, { useState } from "react";
import Header from "./Header";
import Receipt from "./Receipt";
import { faker } from "@faker-js/faker";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

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
    setFromAddress(false);
    setToAddress(false);
    setAmount(false);
  };
  return (
    <div>
      <Header title="Transfers" />
      {/* /// */}
      <FormControl sx={{ m: 1, minWidth: 430 }}>
        <InputLabel>From Address</InputLabel>
        <Select
          label="From Address"
          onChange={(e) => setFromAddress(e.target.value)}
        >
          <MenuItem value=""></MenuItem>
          {source.map((address, index) => (
            <MenuItem key={index} value={address}>{address}</MenuItem>
          ))}
        </Select>
        <br />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, minWidth: 430 }}>
        <InputLabel>To Address</InputLabel>
        <Select
          label="To Address"
          onChange={(e) => setToAddress(e.target.value)}
        >
          <MenuItem value=""></MenuItem>
          {destination.map((address, index) => (
            <MenuItem key={index} value={address}>{address}</MenuItem>
          ))}
        </Select>
        <br />
        {/* <label>Amount</label> */}
        {/* <input type="text" onChange={(e) => setAmount(e.target.value)} /> */}
        <TextField
          id="standard-basic"
          label="Amount"
          variant="standard"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
        <br />
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </FormControl>
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
      {/* </FormControl> */}
    </div>
  );
}

export default Transfer;
