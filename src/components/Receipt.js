import React from "react";

function Receipt(props) {
  return (
    <div>
      <h1>Receipt</h1>
      <p>Transaction Hash - {props.transactionHash}</p>
      <p>Block Hash - {props.blockHash}</p>
      <p>Block Number - {props.blockNumber}</p>
      <p>From Address - {props.fromAddress}</p>
      <p>To Address - {props.toAddress}</p>
      <p>Amount - {props.amount}</p>
      <p>Gas used - {props.gasUsed}</p>
    </div>
  );
}

export default Receipt;
