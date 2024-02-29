import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes,   Route } from "react-router-dom"; 
// import Header from "./components/Header";
// import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import Blocks from "./components/Blocks";
import Navigation from "./components/Navigation";
import Transactions from "./components/Transactions";



function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header title="temp-page" /> */}
      {/* <Transactions /> */}
      {/* <Transfer /> */}
      {/* <Blocks /> */}
      <Navigation />

      <Routes>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/blocks" element={<Blocks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
