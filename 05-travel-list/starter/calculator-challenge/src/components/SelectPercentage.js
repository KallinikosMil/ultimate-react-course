import React from 'react';

const SelectPercentage = ({
  children,
  bill,
  option,
  options,
  optionHandler,
}) => {
  return (
    <div>
      <span style={{marginRight:'10px'}}>{children}</span>
      <select
        value={option.value}
        onChange={(e) => {
          optionHandler(
            options.find((el) => el.value === parseInt(e.target.value, 10))
          );
        }}
      >
        {options.map((el, index) => (
          <option value={el.value} key={index}>
            {el.text}
          </option>
        ))}
      </select>
      {/* <div>The tip is: {(bill * option.value) / 100}</div> */}
    </div>
  );
};

export default SelectPercentage;
