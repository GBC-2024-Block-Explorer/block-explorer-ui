import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function BlockDetails(props) {
  return (
    <div>
      <h1>BlockDetails</h1>
      {/* /// */}
      {/* <table>
        <tr>
          <th>Address</th>
          <td>{props.address}</td>
        </tr>
        <tr>
          <th>Gas used</th>
          <td>{props.gasUsed}</td>
        </tr>
        <tr>
          <th>balance</th>
          <td>{props.balance}</td>
        </tr>
      </table> */}
      <TableContainer component={Paper} sx={{ width: '50%', margin: 'auto', backgroundColor: '#212738' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Address</TableCell>
              <TableCell sx={{ color: 'white' }}>Gas used</TableCell>
              <TableCell sx={{ color: 'white' }}>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>{props.address}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.gasUsed}</TableCell>
              <TableCell sx={{ color: 'white' }}>{props.balance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BlockDetails;
