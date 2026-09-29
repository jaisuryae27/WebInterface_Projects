import React from 'react';
import { useParams, Link } from 'react-router-dom';
import students from '../data/students';

function ReportCard() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id, 10));

  if (!student) {
    return (
      <div className="page">
        <h2>Student Not Found</h2>
        <p>No student record exists for ID: {id}</p>
        <div className="report">
          <Link to="/students">Back to Students</Link>
        </div>
      </div>
    );
  }

  // Subject marks
  const subjectList = [
    { subject: 'Tamil', marks: student.tamil },
    { subject: 'English', marks: student.english },
    { subject: 'Mathematics', marks: student.maths },
    { subject: 'Science', marks: student.science },
    { subject: 'Social', marks: student.social },
  ];

  // Calculation Logic
  const total = student.tamil + student.english + student.maths + student.science + student.social;
  const average = total / 5;

  let grade = 'D';
  if (average >= 90) {
    grade = 'A+';
  } else if (average >= 80) {
    grade = 'A';
  } else if (average >= 70) {
    grade = 'B';
  } else if (average >= 60) {
    grade = 'C';
  } else {
    grade = 'D';
  }

  const result = average >= 40 ? 'PASS' : 'FAIL';

  return (
    <div className="page">
      <h2>Student Report Card</h2>
      <div className="report">
        <h3>{student.name}</h3>
        <p><strong>Roll Number:</strong> {student.rollNo}</p>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjectList.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
          <p><strong>Total:</strong> {total} / 500</p>
          <p><strong>Average:</strong> {average.toFixed(2)}%</p>
          <p><strong>Grade:</strong> {grade}</p>
          <p><strong>Result:</strong> {result}</p>
        </div>

        <Link to="/students">Back to Students</Link>
      </div>
    </div>
  );
}

export default ReportCard;
