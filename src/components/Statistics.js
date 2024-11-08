// Statistics.js
import React, { useEffect, useState } from "react";

const Statistics = ({ month }) => {
  const [stats, setStats] = useState({ totalSale: 0, soldItems: 0, unsoldItems: 0 });

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await fetch(`/api/statistics?month=${month}`);
      const data = await response.json();
      setStats(data);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Sale Amount: ${stats.totalSale}</p>
      <p>Sold Items: {stats.soldItems}</p>
      <p>Not Sold Items: {stats.unsoldItems}</p>
    </div>
  );
};

export default Statistics;
