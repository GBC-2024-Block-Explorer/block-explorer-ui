import React from "react";
import Header from "./Header";
// import { mockTransactions, source, destination, amount, gasUsed, receiptHash } from "./mock";
import { faker } from "@faker-js/faker";


function Transactions() {

  const source = [];
  const destination = [];
  const amount = [];
  const gasUsed = [];
  const receiptHash = [];

  for (let i = 0; i < 5; i++) {
    source.push(faker.finance.ethereumAddress());
    destination.push(faker.finance.ethereumAddress());
    amount.push(faker.finance.amount());
    gasUsed.push(faker.finance.amount({ min: 1000, max: 9999, dec: 0 }));
    receiptHash.push(faker.git.commitSha());
  }
  // console.log(source);
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
        
        {source.map((address, index) => (
          <tr key={index}>
            <td>{source[index]}</td>
            <td>{destination[index]}</td>
            <td>{amount[index]}</td>
            <td>{gasUsed[index]}</td>
            <td>{receiptHash[index]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Transactions;
