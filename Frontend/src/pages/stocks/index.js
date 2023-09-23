import React from 'react';
import Layout from '@theme/Layout';
import ReactApexChart from 'react-apexcharts';
import "./stock.css";

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Showcase() {
  const options = {
    chart: {
      type: 'area',
    },
    xaxis: {
      categories: data.map(item => item.name),
    },
  };

  const series = [
    {
      name: 'UV',
      data: data.map(item => item.uv),
    },
    {
      name: 'PV',
      data: data.map(item => item.pv),
    },
  ];

  const lineColumnOptions = {
    chart: {
      id: 'mixed-chart',
    },
    xaxis: {
      categories: data.map(item => item.name),
    },
  };

  const lineColumnSeries = [
    {
      name: 'Line',
      type: 'line',
      data: data.map(item => item.amt),
    },
    {
      name: 'Column',
      type: 'column',
      data: data.map(item => item.amt),
    },
  ];

  return (
    <Layout title="Showcase" description="Showcase of our users' websites">
      <div className="centered-container">
        <div className="showcase-card">
          <div className="price">
            <h2>Stock</h2>
            <button className="sell-button">Sell</button>
          </div>
          <div className="stock">
            <h2>Price</h2>
            <button className="buy-button">Buy</button>
          </div>
        </div>
        <div className="centered-chart">
          <ReactApexChart options={options} series={series} type="area" height={400} width={900} />
        </div>
      </div>
      <div className="centered-container">

      <div className="circle-container">
        <div className="circle">
          <div className="circle-inner">
            <span className="percentage">75%</span>
          </div>
        </div>
        <div className="circle">
          <div className="circle-inner">
            <span className="percentage">50%</span>
          </div>
        </div>
      </div>
      <div className="centered-line-column-chart">
  <ReactApexChart options={lineColumnOptions} series={lineColumnSeries} type="line" height={400} width={900} />
</div>
</div>

    </Layout>
  );
}
