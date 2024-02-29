import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#9D44B5' }}>
        <Toolbar>
          <Typography>Block Explorer</Typography>

          <Button color="inherit" component={Link} to="/transactions">
            Transactions
          </Button>
          <Button color="inherit" component={Link} to="/transfer">
            Transfer
          </Button>
          <Button color="inherit" component={Link} to="/blocks">
            Blocks
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
