import React from 'react';
import './StatsBar.css';

function StatsBar({ total, presentCount, absentCount, pct }) {
  return (
    <div className="stats" id="stats">
      <span>Total: {total}</span>
      <span>Present: {presentCount}</span>
      <span>Absent: {absentCount}</span>
      <span>Attendance: {pct}%</span>
    </div>
  );
}

export default StatsBar;
