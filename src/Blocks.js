// src/Blocks.js
import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const Blocks = () => {
  const [filteredBlocks, setFilteredBlocks] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blockAddress = searchParams.get("address");

  const initialBlocks = useMemo(
    () => [
      { id: 1, address: "0x12345678", transactions: 10 },
      { id: 2, address: "0x45637448", transactions: 5 },
      // Add more blocks as needed
    ],
    [],
  );

  useEffect(() => {
    if (blockAddress) {
      const filtered = initialBlocks.filter(
        (block) => block.address === blockAddress,
      );
      setFilteredBlocks(filtered);
    } else {
      setFilteredBlocks(initialBlocks);
    }
  }, [blockAddress, initialBlocks]);

  return (
    <div>
      <h2>Blocks</h2>
      {filteredBlocks.length > 0 ? (
        <div>
          {filteredBlocks.map((block) => (
            <div key={block.id}>
              <h3>Block Details</h3>
              <p>Address: {block.address}</p>
              <p>Transactions: {block.transactions}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No block found with the provided address.</p>
      )}
    </div>
  );
};

export default Blocks;
