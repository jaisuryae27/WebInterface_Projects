# To-Do Application

## Project Overview
A To-Do Application developed using React and CSS that allows users to add, view, update, and delete tasks, with navigation handled by React Router.

- **Developer**: SANJEEV KUMAR D
- **Register No**: 411625243046
- **Department**: B.Tech AIDS

---

## Features
- **Task Management**:
  - `addTask()`: Adds new tasks dynamically.
  - `completeTask(id)`: Toggles task completion state with strike-through styling.
  - `deleteTask(id)`: Removes tasks from the list.
- **Navigation with React Router**:
  - `/` &rarr; To-Do List page (`Todo.jsx`).
  - `/task/:id` &rarr; Task Details page (`TaskDetails.jsx`), passing task state via `useLocation()`.
  - Global `Navbar.jsx` with quick navigation link back to the list.
- **Styling**: Responsive design with clean white container (`.page`), input form, strike-through text for completed tasks, and navigation bar.

---

## How to Run

1. Open terminal in this folder:
   ```bash
   cd "D:\projects wi\todo"
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
