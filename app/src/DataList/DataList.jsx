import React from 'react';


const DataList = () => {
  const data = [
    { name: 'course 1', description: 'Java' },
    { name: 'course 2', description: 'JavaScript' },
    { name: 'course 3', description: 'Python' },
    { name: 'course 4', description: 'C++' },
    { name: 'course 5', description: 'Ruby' },
    { name: 'course 6', description: 'Go' },
  ];
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Course List Static Data</h3>
      <ul className="list-group">
        {data.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
