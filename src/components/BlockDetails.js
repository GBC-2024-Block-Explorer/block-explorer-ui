import React from 'react'

function BlockDetails(props) {
  return (
    <div>
        <h1>BlockDetails</h1>
        <table>
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
        </table>
        </div>
  )
}

export default BlockDetails