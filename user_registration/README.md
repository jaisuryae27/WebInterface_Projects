# User Registration & Verification

## Project Overview
User Registration & Verification application built using React and CSS that allows users to enter personal details, validate the information, upload a profile photo, and submit or reset the registration form.

- **Developer**: SANJEEV KUMAR D
- **Register No**: 411625243046
- **Department**: B.Tech AIDS

---

## Features
- **State Management**: Uses `useState()` hook to manage all form fields and validation errors.
- **Form Validations**:
  - Required fields check (Full Name, Username, Aadhar Name, Aadhar Number).
  - Username and Aadhar Name must match.
  - Email format validation (`@`).
  - Phone number validation (numeric only, exactly 10 digits).
  - Password and Confirm Password match check.
  - Permanent and Current Address required.
  - Profile photo upload required with max file size of 2 MB.
- **Address Handling**: "Same as Permanent Address" checkbox automatically copies permanent address to current address and makes current address read-only.
- **Reusable Component**: Modular `Button` component supporting multiple preset colors (`primary`, `secondary`, `success`, `danger`, `warning`, `info`) or custom colors.
- **Clean Styling**: Centered responsive card design with custom input styling, error banner, and success summary card.

---

## How to Run

1. Open terminal in this folder:
   ```bash
   cd "D:\projects wi\user_registration"
   ```

2. Install dependencies (already installed):
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
