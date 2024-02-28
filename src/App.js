// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./components/Theme";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import Blocks from "./components/Blocks";
import Transfer from "./components/Transfer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/blocks" element={<Blocks />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
