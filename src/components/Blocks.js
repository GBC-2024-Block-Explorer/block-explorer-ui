import React, { useState } from "react";
import BlockDetails from "./BlockDetails";

function Blocks() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedAddress(e.target.value);
    setSelectedBlock(true);
  };

  return (
    <div>
      <h1>Blocks</h1>
      <select onChange={handleOnChange}>
        <option>0x123</option>
        <option>0x456</option>
        <option>0x789</option>
      </select>
      {selectedBlock ? (
        <BlockDetails address={selectedAddress} balance="123" gasUsed="7878" />
      ) : (
        <h1>Ethereum Address is required</h1>
      )}
    </div>
  );
}

export default Blocks;
