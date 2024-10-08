import React from 'react';

const DataList = () => {
  const data = [
    { name: 'Course 1', about: 'Java - A high-level programming language.' },
    { name: 'Course 2', about: 'JavaScript - A versatile scripting language.' },
    { name: 'Course 3', about: 'Python - A popular language for data science.' },
    { name: 'Course 4', about: 'C++ - An extension of C for object-oriented programming.' },
    { name: 'Course 5', about: 'Ruby - Known for its elegant syntax.' },

  ];

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Course List</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Course</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.about}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
