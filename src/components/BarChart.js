// BarChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ month }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const response = await fetch(`/api/barChart?month=${month}`);
      const data = await response.json();

      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: data.priceRanges.map((range) => range.label),
          datasets: [
            {
              label: "Items",
              data: data.priceRanges.map((range) => range.count),
              backgroundColor: "rgba(255, 206, 86, 0.6)",
            },
          ],
        },
      });
    };

    fetchBarChartData();
  }, [month]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
