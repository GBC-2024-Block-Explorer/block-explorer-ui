import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Transactions from "./Transactions";
import Transfer from "./Transfer";
import Blocks from "./Blocks";

function Navigation() {
  return (
    <div>
      <h1>Navigation</h1>
      <Router>
        <nav>
          <Link to="/">Transactions</Link>
          <Link to="/transfer">Transfer</Link>
          <Link to="/blocks">Blocks</Link>
          <Link to="/accounts">Accounts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/blocks" element={<Blocks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
