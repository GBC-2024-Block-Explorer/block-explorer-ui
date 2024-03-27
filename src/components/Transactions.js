import React, { useEffect, useState } from "react";
import Header from "./Header";
// import { mockTransactions, source, destination, amount, gasUsed, receiptHash } from "./mock";
import { faker } from "@faker-js/faker";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Transactions() {
  const source = [];
  const destination = [];
  const amount = [];
  const status = [];
  const gasUsed = [];
  const receiptHash = [];
  const [arr, setArr] = useState("");

  // for (let i = 0; i < 5; i++) {
  //   source.push(faker.finance.ethereumAddress());
  //   destination.push(faker.finance.ethereumAddress());
  //   amount.push(faker.finance.amount());
  //   gasUsed.push(faker.finance.amount({ min: 1000, max: 9999, dec: 0 }));
  //   receiptHash.push(faker.git.commitSha());
  // }

  useEffect(() => {
    fetch("http://localhost:5000/transactions/history")
      .then((res) => res.json())
      .then((json) => setArr(json))
      .catch((error) => console.error(error));
  }, []);

  for (let i = 0; i < arr.length; i++) {
    source.push(arr[i].source);
    destination.push(arr[i].destination);
    amount.push(arr[i].amount);
    status.push(arr[i].status);
    gasUsed.push(arr[i].gasUsed);
    receiptHash.push(arr[i].receiptHash);
  }
  console.log(source);
  // const MyArray = arr.map(item => [
  //   item.source,
  //   item.destination,
  //   item.amount,
  //   item.status,
  //   item.gasUsed,
  //   item.receiptHash,
  //   item.createdAt,
  //   item.updatedAt
  // ]);
  // console.log("Array3434", arr[0].amount);
  return (
    <div>
      <Header title="Transaction History" />
      {/* <table>
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
      </table> */}
      <TableContainer
        component={Paper}
        sx={{ width: "70%", margin: "auto", backgroundColor: "#212738" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Source</TableCell>
              <TableCell sx={{ color: "white" }}>Destination</TableCell>
              <TableCell sx={{ color: "white" }}>Amount</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Gas used</TableCell>
              <TableCell sx={{ color: "white" }}>Receipt Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {source.map((address, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "white" }}>{source[index]}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {destination[index]}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{amount[index]}</TableCell>
                <TableCell sx={{ color: "white" }}>{status[index]}</TableCell>
                <TableCell sx={{ color: "white" }}>{gasUsed[index]}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {receiptHash[index]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Transactions;
