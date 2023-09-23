import React from 'react';
import Layout from '@theme/Layout';
import './portfolio.css'; // Import your CSS file

export default function Showcase() {
  // Sample data for the stock market card
  const stockData = {
    companyName: 'PNL: 1664',
    stockSymbol: '3409',
    stockSymbol1: '2247',
  };

  // Sample data for additional cards
  const additionalCards = [
    { title: 'Apple', content: '₹500', data: '₹1600' },
    { title: 'Microsoft', content: '₹1500', data: '₹1249' },
    { title: 'Google', content: '₹247', data: '₹560' },
  ];
  const transactiondetail = [
    { title: 'Apple', content: '₹600', data: '₹720' },
    { title: 'Microsoft', content: '₹1200', data: '₹1349' },
    { title: 'Google', content: '₹147', data: '₹260' },
  ];

  return (
    <Layout title="Showcase" description="Showcase of our users' websites">
      <div className="centered-container1">
        <div className="stock-card">
          <h2>{stockData.companyName}</h2>
          <p>Current: {stockData.stockSymbol}</p>
          <p>Invested: {stockData.stockSymbol1}</p>

        </div>
        {/* Additional cards */}
        {additionalCards.map((card, index) => (
          <div className="additional-card" key={index}>
            <div className="card-header">
              <h2>{card.title}</h2>
              <p>Current: {card.data}</p>
            </div>
            <p>Invested: {card.content}</p>
          </div>
        ))}
        <h1>Transaction</h1>
         {transactiondetail.map((card, index) => (
          <div className="additional-card" key={index}>
            <div className="card-header">
              <h2>{card.title}</h2>
              <p>{card.data}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
