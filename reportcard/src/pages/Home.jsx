import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h2>Welcome to the School Report System</h2>
      <p style={{ marginTop: '15px', lineHeight: '1.6', color: '#555' }}>
        This application allows users to view student details, calculate grades dynamically, 
        and display academic report cards in a structured format with seamless navigation.
      </p>
      <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '6px', borderLeft: '4px solid #222' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Navigation Instructions:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#444' }}>
          <li>Click on <strong>Students</strong> in the navigation bar to see the list of all registered students.</li>
          <li>Click on <strong>View Report</strong> on any student card to view their complete report card with calculated total, average, grade, and result.</li>
        </ul>
      </div>
      <div style={{ marginTop: '25px' }}>
        <Link 
          to="/students" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: '#222',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          View Students List
        </Link>
      </div>
    </div>
  );
}

export default Home;
