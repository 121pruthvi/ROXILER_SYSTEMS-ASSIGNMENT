
  // src/components/Transaction.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';


const Transaction = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, page, searchTerm]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/transactions`, {
        params: {
          month: selectedMonth,
          search: searchTerm,
          page,
          perPage,
        },
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  return (
    <div className="transaction-table">
      <div className="transaction-controls">
        <input
          type="text"
          placeholder="Search transaction"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
              <td>
                <img src={transaction.image} alt={transaction.title} className="transaction-image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Transaction;
