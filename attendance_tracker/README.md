# Attendance Tracker Application

**Student Details:**
- **Name:** SANJEEV KUMAR D
- **Department:** B.TECH-AI&DS
- **Subject:** Web Technology
- **Batch:** 04

## Project Description
An Attendance Tracker web application built using React (converted from the HTML, CSS, and JavaScript specification). It displays a list of students, allows their attendance status to be toggled between Present and Absent, enables adding new students, and automatically calculates and displays total students, present count, absent count, and attendance percentage.

## Files Included
- **React Application (`src/`)**:
  - `components/AddStudent.jsx` & `AddStudent.css`: Input form for adding a student.
  - `components/StatsBar.jsx` & `StatsBar.css`: Live statistics summary (Total, Present, Absent, Attendance %).
  - `components/StudentRow.jsx` & `StudentRow.css`: Student card with status and toggle action.
  - `components/StudentList.jsx` & `StudentList.css`: List container mapping student cards.
  - `data/students.js`: Initial student dataset.
  - `App.jsx` & `App.css`: State management, calculations, and main card layout.
  - `index.jsx` & `index.css`: React entry point and global layout styles.
- **Original Standalone HTML (`attendance_tracker.html`)**:
  - Single-file standalone HTML/CSS/JavaScript implementation as provided in the PDF code.

## How to Run the React Project

1. Open a terminal inside this directory (`D:\projects wi\attendance_tracker`).
2. If `node_modules` is not already installed, run:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
   *(or `npm run dev`)*
4. Open `http://localhost:3000` in your browser.
