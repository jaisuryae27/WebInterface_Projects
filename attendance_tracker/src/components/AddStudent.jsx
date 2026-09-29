import React, { useState } from 'react';
import './AddStudent.css';

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      onAddStudent(name.trim());
      setName('');
    }
  };

  return (
    <form className="add-row" onSubmit={handleSubmit}>
      <input
        type="text"
        id="nameInput"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" id="addBtn">Add Student</button>
    </form>
  );
}

export default AddStudent;
