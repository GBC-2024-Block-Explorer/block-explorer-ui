import React, { useState } from "react";
import BlockDetails from "./BlockDetails";
import { faker } from "@faker-js/faker";

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
      <h1>Blocks</h1>
      <select onChange={handleOnChange}>
        <option value=""></option>
        {address.map((address) => (
          <option>{address}</option>
        ))}
      </select>
      {selectedBlock ? (
        <BlockDetails address={selectedAddress} balance={balance} gasUsed={gasUsed} />
      ) : (
        <h1>Ethereum Address is required</h1>
      )}
    </div>
  );
}

export default Blocks;
