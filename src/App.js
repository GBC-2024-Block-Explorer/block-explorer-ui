import React from "react";
import "./App.css";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Header title="temp-page" /> */}
      {/* <Transactions /> */}
      <Transfer />
    </div>
  );
}

export default App;
