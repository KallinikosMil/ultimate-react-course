import React from 'react';

const BillInput = ({ children, bill, billHandler }) => {
  return (
    <div>
      <span style={{ marginRight: '10px' }}>{children}</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => {
          billHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default BillInput;
