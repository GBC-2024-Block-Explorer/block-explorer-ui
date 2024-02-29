import React, { useState } from "react";
import BlockDetails from "./BlockDetails";
import { faker } from "@faker-js/faker";
import Header from "./Header";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const address = [];

for (let i = 0; i < 5; i++) {
  address.push(faker.finance.ethereumAddress());
  // destination.push(faker.finance.ethereumAddress());
  // receiptHash.push(faker.git.commitSha());
}

function Blocks() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(false);
  const [balance, setBalance] = useState("");
  const [gasUsed, setGasUsed] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedAddress(e.target.value);
    setSelectedBlock(true);
    setBalance(Math.round(Math.random() * 1000));
    setGasUsed(Math.round(Math.random() * 10000));
  };

  return (
    <div>
      <Header title="Blocks" />
      <FormControl sx={{ m: 1, minWidth: 430 }}>
        <InputLabel>Ethereum Address</InputLabel>
        <Select label="Ethereum Address" onChange={handleOnChange}>
          <MenuItem value=""></MenuItem>
          {address.map((address) => (
            <MenuItem value={address}>{address}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedBlock ? (
        <BlockDetails
          address={selectedAddress}
          balance={balance}
          gasUsed={gasUsed}
        />
      ) : (
        <h1>Ethereum Address is required</h1>
      )}
    </div>
  );
}

export default Blocks;
