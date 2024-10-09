import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4500/api/data')  // Replace with your API URL
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>  // Modify based on API response structure
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
