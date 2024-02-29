import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
import Header from "./Header";

function Receipt(props) {
  return (
    <div>
      <Header title="Receipt" />
     
      <TableContainer component={Paper} sx={{ width: '90%', margin: 'auto', backgroundColor: '#212738' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>From Address</TableCell>
              <TableCell sx={{ color: 'white' }}>To Address</TableCell>
              <TableCell sx={{ color: 'white' }}>Amount</TableCell>
              <TableCell sx={{ color: 'white' }}>Gas used</TableCell>
              <TableCell sx={{ color: 'white' }}>Block Number</TableCell>
              <TableCell sx={{ color: 'white' }}>Block Hash</TableCell>
              <TableCell sx={{ color: 'white' }}>Transaction Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>{props.fromAddress}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.toAddress}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.amount}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.gasUsed}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.blockNumber}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.blockHash}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.transactionHash}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Receipt;
