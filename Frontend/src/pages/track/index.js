import React, { useState } from 'react';
import './track.css'; // Make sure you have the appropriate CSS file
import Layout from '@theme/Layout'; // Import the Layout component from your project's theme
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ApexCharts from 'apexcharts'

function Track() {
    
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (text.trim() === '' || amount.trim() === '') {
      alert('Please add text and amount');
    } else {
      const newTransaction = {
        id: Math.random().toString(36).substring(7),
        text,
        amount: +amount,
      };

      setTransactions([...transactions, newTransaction]);
      setText('');
      setAmount('');
    }
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  

  return (
    <>
      <Layout title="Expense Tracker" description="Track your expenses">
        <div className="Track">
          <h2>Expense Tracker</h2>
          <div className="container1">
            <h4>Your Balance</h4>
            <h1 id="balance">${total.toFixed(2)}</h1>

            <div className="inc-exp-container">
              <div>
                <h4>Income</h4>
                <p className="money-plus">
                  +${' '}
                  {transactions
                    .filter((transaction) => transaction.amount > 0)
                    .reduce((acc, transaction) => acc + transaction.amount, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div>
                <h4>Expense</h4>
                <p className="money-minus">
                  -${' '}
                  {Math.abs(
                    transactions
                      .filter((transaction) => transaction.amount < 0)
                      .reduce((acc, transaction) => acc + transaction.amount, 0)
                      .toFixed(2)
                  )}
                </p>
              </div>
            </div>

            <h3>History</h3>
            <ul className="list">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className={transaction.amount < 0 ? 'minus' : 'plus'}
                >
                  {transaction.text}{' '}
                  <span>
                    {transaction.amount < 0 ? '-' : '+'}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => removeTransaction(transaction.id)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
            <h3>Add New Transaction</h3>
            <div className="form-control">
              <label htmlFor="text"></label>
              <input
                type="text"
                id="text"
                placeholder="Discription...."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                id="amount"
                placeholder="Enter Amount..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Debit" />
        <FormControlLabel value="male" control={<Radio />} label="Credit" />
      </RadioGroup>
    </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={0}>Travel</MenuItem>
        <MenuItem value={0}>Food</MenuItem>
        <MenuItem value={0}>Houese Hold</MenuItem>
        <MenuItem value={0}>Entertainment</MenuItem>
        <MenuItem value={0}>Other</MenuItem>


      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Payment Method</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={0}>Cash</MenuItem>
        <MenuItem value={0}>UPI</MenuItem>
        <MenuItem value={0}>Credit Card</MenuItem>
        <MenuItem value={0}>Debit Card</MenuItem>


      </Select>
    </FormControl>
    
            <button className="btn" onClick={addTransaction}>
              Add Transaction
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Track;
