// import React, { useState } from 'react';
// import BillInput from './components/BillInput';
// import SelectPercentage from './components/SelectPercentage';
// import Output from './components/Output';
// import Reset from './components/Reset';

// const options = [
//   { text: 'Not Bad (10%)', value: 10 },
//   { text: 'Somewhat good (20%)', value: 20 },
//   { text: 'Goooooood (50%)', value: 50 },
//   { text: 'Great (90%)', value: 90 },
//   { text: 'Perfect (100%)', value: 100 },
// ];

// const App = () => {
//   const [bill, setBill] = useState(0);
//   const [option, setOption] = useState(options[0]); // Set initial option
//   const [option2, setOption2] = useState(options[0]);
//   const billHandler = (value) => {
//     setBill(value);
//   };

//   const optionHandler = (value) => {
//     setOption(value);
//   };
//   const optionHandler2 = (value) => {
//     setOption2(value);
//   };

//   const onResetHandler = () => {
//     setBill(0);
//     setOption(options[0]);
//     setOption2(options[0]);
//   };

//   const totalTip = (bill * option.value) / 100 + (bill * option2.value) / 100;
//   // Calculate total amount
//   const totalAmount = Number(bill) + totalTip;
//   return (
//     <div>
//       <BillInput bill={bill} billHandler={billHandler}>
//         How much was the bill?
//       </BillInput>
//       <SelectPercentage
//         bill={bill}
//         options={options}
//         option={option}
//         optionHandler={optionHandler}
//       >
//         How did you like the service?
//       </SelectPercentage>
//       <SelectPercentage
//         bill={bill}
//         options={options}
//         option={option2}
//         optionHandler={optionHandler2}
//       >
//         How did your friend like the service
//       </SelectPercentage>
//       <Output output={totalAmount} />
//       <Reset onClick={onResetHandler}>Reset</Reset>
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';

const App = () => {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
};

export default App;

const TipCalculator = () => {
  const [bill, setBill] = useState('0');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleRest = () => {
    setBill('');
    setPercentage1(0);
    setPercentage2(2);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 ? (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleRest} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

const SelectPercentage = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%) </option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ bill, tip }) => {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
};

const Reset = ({ onReset }) => {
  return <button onClick={onReset}>Reset</button>;
};
