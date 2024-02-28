import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
 const navigate = useNavigate();
 const [fromAddress, setFromAddress] = useState("");
 const [toAddress, setToAddress] = useState("");
 const [amount, setAmount] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Transfer from ${fromAddress} to ${toAddress} for ${amount}`);

    // Pass the transfer details in the state
    navigate("/transactions", { state: { transfer: { fromAddress, toAddress, amount } } });
 };

 return (
    <Box sx={{ padding: "16px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Transfers
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="From Address"
          variant="outlined"
          value={fromAddress}
          onChange={(e) => setFromAddress(e.target.value)}
          fullWidth
        />
        <TextField
          label="To Address"
          variant="outlined"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
          fullWidth
        />
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/transactions")}
        >
          Cancel
        </Button>
      </form>
    </Box>
 );
};

export default Transfer;
