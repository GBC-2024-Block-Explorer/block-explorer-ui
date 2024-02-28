// src/Header.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Custom styled AppBar for a blockchain-themed background
const BlockchainAppBar = styled(AppBar)({
  backgroundColor: "#000000", // Dark background
  color: "#FFFFFF", // White text
  boxShadow: "none", // Remove shadow for a flat design
});

// Custom styled Button for navigation links and search button
const NavButton = styled(Button)({
  textTransform: "none", // Prevent uppercase text
  color: "#FFFFFF", // Ensure text color is white
  "&:hover": {
    backgroundColor: "rgba(255,   255,   255,   0.1)", // Lighten background on hover
  },
  // Make the button small
  fontSize: "0.875rem", // Smaller font size
  padding: "6px  16px", // Smaller padding
});

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/blocks?address=${search}`);
  };

  return (
    <BlockchainAppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div">
          Blockchain Explorer
        </Typography>
        <nav>
          <NavButton color="inherit" component="a" href="/transactions">
            Transactions
          </NavButton>
          <NavButton color="inherit" component="a" href="/transfer">
            Transfer
          </NavButton>
          <NavButton color="inherit" component="a" href="/blocks">
            Blocks
          </NavButton>
        </nav>
        <form
          onSubmit={handleSearch}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            label="Search Block"
            variant="outlined"
            size="small" //
            onChange={(e) => setSearch(e.target.value)}
            sx={{ marginRight: 1, width: 150 }} // Adjust width to fit content
          />
          <NavButton type="submit" color="inherit" size="small">
            Search
          </NavButton>
        </form>
      </Toolbar>
    </BlockchainAppBar>
  );
};

export default Header;
