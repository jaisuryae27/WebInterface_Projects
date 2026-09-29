# Calculator Web Application Using React and useState

**Student Details:**
- **Name:** SANJEEV KUMAR D
- **Department:** B.tech-AIDS
- **Batch:** 4
- **Subject:** Web Interface

## Project Description
A sleek, modern dark-themed Calculator web application developed using React, the `useState` hook, and Tailwind CSS. It accepts numbers and operators through an interactive keypad grid, accumulates expressions as the user types, and evaluates the result when the equals (`=`) button is clicked.

## Concepts & Features
- Single state variable `display` managed via React's `useState` hook.
- Keypad layout supporting:
  - `AC`: Clear all input.
  - `DEL`: Remove the last character (`prev.slice(0, -1)`).
  - Arithmetic operations: `+`, `−`, `×`, `÷`, `%`.
  - Number keys: `0-9` (with `0` spanning double width: `col-span-2`).
  - `=`: Evaluates the mathematical expression safely inside a `try/catch` block.
- Tailwind CSS layout:
  - Gradient background: `bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950`.
  - Rounded card: `bg-slate-900 rounded-3xl shadow-2xl border border-indigo-500/20`.
  - Accent-styled `=` key in `bg-amber-400`.
  - Operator keys in `bg-indigo-800`.
  - Number keys in `bg-slate-800`.

## How to Run the Project

1. Open a terminal in `D:\projects wi\calculator`.
2. If dependencies are not already installed, run:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
   *(or `npm run dev`)*
4. Open `http://localhost:3000` in your browser.
