import React from 'react';
import './StudentRow.css';

function StudentRow({ student, index, onToggle }) {
  return (
    <div className="row">
      <span className="name">{student.name}</span>
      <span className="status">Status: {student.present ? 'Present' : 'Absent'}</span>
      <button onClick={() => onToggle(index)}>
        {student.present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  );
}

export default StudentRow;
