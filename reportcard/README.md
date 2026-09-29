# Student Report Card Application

## Project Overview
A React and CSS application that allows users to view student details, calculate grades dynamically, and display individual academic reports in a structured tabular format with navigation powered by React Router.

- **Developer**: SANJEEV KUMAR D
- **Register No**: 411625243046
- **Department**: B.Tech AIDS

---

## Features
- **React Router Navigation**:
  - `/` &rarr; Home page with system introduction and navigation instructions.
  - `/students` &rarr; Student list displaying student names, roll numbers, and links to reports.
  - `/report/:id` &rarr; Dynamic report card route utilizing `useParams()` to fetch student data by ID.
- **Dynamic Grade Calculation Logic**:
  - Total marks = sum of all subjects (Tamil, English, Mathematics, Science, Social).
  - Average = Total / 5.
  - Grade criteria:
    - &ge; 90 &rarr; **A+**
    - &ge; 80 &rarr; **A**
    - &ge; 70 &rarr; **B**
    - &ge; 60 &rarr; **C**
    - Else &rarr; **D**
  - Result status: **PASS** if Average &ge; 40%, else **FAIL**.
- **Responsive Layout & Styling**: Clean presentation with custom navigation bar, student card grids, and bordered marks table.

---

## How to Run

1. Open terminal in this folder:
   ```bash
   cd "D:\projects wi\reportcard"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```
