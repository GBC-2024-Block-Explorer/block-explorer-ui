import React, { useState, useEffect } from "react";
import BlockDetails from "./BlockDetails";
import { faker } from "@faker-js/faker";
import Header from "./Header";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// const address = [];

// for (let i = 0; i < 5; i++) {
//   address.push(faker.finance.ethereumAddress());
//   // destination.push(faker.finance.ethereumAddress());
//   // receiptHash.push(faker.git.commitSha());
// }

function Blocks() {
  const [ethereumAddresses, setEthereumAddresses] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/blocks/block")
      .then((res) => res.json())
      .then((json) => setEthereumAddresses(json))
      .catch((error) => console.error(error));
  }, []);

  console.log("ethAddr", ethereumAddresses);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedAddress(e.target.value);
    setSelectedBlock(true);
    // setBalance(Math.round(Math.random() * 1000));
    // setGasUsed(Math.round(Math.random() * 10000));
  };

  return (
    <div>
      <Header title="Blocks" />
      <FormControl sx={{ m: 1, minWidth: 430 }}>
        <InputLabel>Ethereum Address</InputLabel>
        {ethereumAddresses === "" ? (
          <div></div>
        ) : (
          <Select label="Ethereum Address" onChange={handleOnChange}>
            {/* <MenuItem value=""></MenuItem> */}
            {ethereumAddresses.map((address, index) => (
              <MenuItem key={index} value={address.address}>
                {address.address}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
      {selectedBlock ? (
        <BlockDetails
          address={selectedAddress}
          balance={
            ethereumAddresses.find((block) => block.address === selectedAddress)
              .balance
          }
          gasUsed={
            ethereumAddresses.find((block) => block.address === selectedAddress)
              .gasUsed
          }
        />
      ) : (
        <h1>Ethereum Address is required</h1>
      )}
    </div>
  );
}

export default Blocks;
