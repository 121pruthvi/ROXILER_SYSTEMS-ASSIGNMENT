// src/App.js

import React, { useState } from 'react';
import Transaction from './components/Transaction';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import './styles/Dashboard.css';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div className="dashboard">
      <h1>Transaction Dashboard</h1>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <Transaction selectedMonth={selectedMonth} />
      <Statistics selectedMonth={selectedMonth} />
      <BarChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
