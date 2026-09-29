import React, { useState } from 'react';
import { initialStudents } from './data/students';
import AddStudent from './components/AddStudent';
import StatsBar from './components/StatsBar';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState(initialStudents);

  const total = students.length;
  const presentCount = students.filter((s) => s.present).length;
  const absentCount = total - presentCount;
  const pct = total === 0 ? "0.00" : ((presentCount / total) * 100).toFixed(2);

  const handleToggle = (index) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleAddStudent = (name) => {
    if (name.trim() !== '') {
      setStudents((prev) => [...prev, { name: name.trim(), present: false }]);
    }
  };

  return (
    <div className="wrap">
      <h1>Attendance Tracker</h1>
      <AddStudent onAddStudent={handleAddStudent} />
      <StatsBar
        total={total}
        presentCount={presentCount}
        absentCount={absentCount}
        pct={pct}
      />
      <StudentList students={students} onToggle={handleToggle} />
    </div>
  );
}

export default App;
