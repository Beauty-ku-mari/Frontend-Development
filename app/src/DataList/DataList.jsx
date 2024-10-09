import React from 'react';

const DataList = () => {
  const data = [
<<<<<<< displayed_in_a_list_format
    { name: 'course 1', description: 'Java' },
    { name: 'course 2', description: 'JavaScript' },
    { name: 'course 3', description: 'Python' },
    { name: 'course 4', description: 'C++' },
    { name: 'course 5', description: 'Ruby' },
    { name: 'course 6', description: 'Go' },
    
=======
    { name: 'Course 1', about: 'Java - A high-level programming language.' },
    { name: 'Course 2', about: 'JavaScript - A versatile scripting language.' },
    { name: 'Course 3', about: 'Python - A popular language for data science.' },
    { name: 'Course 4', about: 'C++ - An extension of C for object-oriented programming.' },
    { name: 'Course 5', about: 'Ruby - Known for its elegant syntax.' },
    { name: 'Course 6', about: 'Go - Designed for simplicity and efficiency.' },
    { name: 'Course 7', about: 'Swift - The language for iOS app development.' },
    { name: 'Course 8', about: 'PHP - Widely used for web development.' },
    { name: 'Course 9', about: 'Rust - A language empowering everyone to build reliable and efficient software.' },
    { name: 'Course 10', about: 'Kotlin - A modern language for Android development.' },

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
