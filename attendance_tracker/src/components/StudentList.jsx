import React from 'react';
import StudentRow from './StudentRow';
import './StudentList.css';

function StudentList({ students, onToggle }) {
  return (
    <div id="list" className="student-list">
      {students.map((student, index) => (
        <StudentRow
          key={`${student.name}-${index}`}
          student={student}
          index={index}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default StudentList;
