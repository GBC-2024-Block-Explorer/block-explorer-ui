import React from "react";
import Header from "./Header";
import { mockTransactions } from "./mock";

function Transactions() {
  return (
    <div>
      <Header title="Transaction History" />
      <table>
        <tr>
          <th>Source</th>
          <th>Destination</th>
          <th>Amount</th>
          <th>Status</th>
          <th>gasUsed</th>
          <th>receiptHash</th>
        </tr>
        <tr>
          <td>{mockTransactions[0].source}</td>
          <td>{mockTransactions[0].destination}</td>
          <td>{mockTransactions[0].amount}</td>
          <td>{mockTransactions[0].status}</td>
          <td>{mockTransactions[0].gasUsed}</td>
          <td>{mockTransactions[0].receiptHash}</td>
        </tr>
      </table>
    </div>
  );
}

export default Transactions;
