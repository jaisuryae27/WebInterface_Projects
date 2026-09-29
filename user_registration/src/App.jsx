import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    aadharName: '',
    aadharNumber: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    qualification: '',
    nationality: 'Indian',
    language: '',
    permAddress: '',
    currAddress: '',
    sameAddress: false,
    photo: null,
    photoName: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prev) => {
      const updated = { ...prev, [name]: val };
      if (name === 'permAddress' && prev.sameAddress) {
        updated.currAddress = val;
      }
      return updated;
    });
  };

  // Same Address Checkbox Toggle
  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      sameAddress: checked,
      currAddress: checked ? prev.permAddress : prev.currAddress
    }));
  };

  // Handle Photo File Upload (Max 2MB)
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setError('Photo file size must be less than 2 MB!');
      setFormData((prev) => ({
        ...prev,
        photo: null,
        photoName: ''
      }));
    } else {
      setError('');
      setFormData((prev) => ({
        ...prev,
        photo: file,
        photoName: file.name
      }));
    }
  };

  // Simple Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // 1. Required Fields Check
    if (
      !formData.fullName ||
      !formData.username ||
      !formData.aadharName ||
      !formData.aadharNumber
    ) {
      setError('Please fill all required personal fields.');
      return;
    }

    // 2. Username & Aadhar Name must match
    if (
      formData.username.trim() !==
      formData.aadharName.trim()
    ) {
      setError('Username and Aadhar name must be the same!');
      return;
    }

    // 3. Email Check
    if (!formData.email || !formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // 4. Phone Number Check (Must be 10 numbers only)
    if (
      !formData.phone ||
      isNaN(formData.phone) ||
      formData.phone.length !== 10
    ) {
      setError(
        'Phone number must contain ONLY numbers and be exactly 10 digits!'
      );
      return;
    }

    // 5. Password Match Check
    if (
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      setError('Passwords do not match!');
      return;
    }

    // 6. Address & Photo Check
    if (!formData.permAddress || !formData.currAddress) {
      setError('Please enter Permanent and Current address.');
      return;
    }

    if (!formData.photoName) {
      setError('Please upload a profile photo under 2 MB.');
      return;
    }

    setSuccess(true);
  };

  // Clear Handler
  const handleClear = () => {
    setFormData({
      fullName: '',
      username: '',
      aadharName: '',
      aadharNumber: '',
      dob: '',
      gender: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      qualification: '',
      nationality: 'Indian',
      language: '',
      permAddress: '',
      currAddress: '',
      sameAddress: false,
      photo: null,
      photoName: ''
    });
    setError('');
    setSuccess(false);
  };

  return (
    <div className="box">
      <h2>User Registration & Verification</h2>
      {error && (
        <div className="error-msg">
          {error}
        </div>
      )}
      {success ? (
        <div className="success-msg">
          <h3>Form Submitted Successfully!</h3>
          <p>
            <b>Name:</b> {formData.fullName}
          </p>
          <p>
            <b>Username / Aadhar Name:</b> {formData.username} (Matched)
          </p>
          <p>
            <b>Phone:</b> {formData.phone}
          </p>
          <p>
            <b>Email:</b> {formData.email}
          </p>
          <p>
            <b>Address:</b> {formData.currAddress}
          </p>
          <p>
            <b>Photo:</b> {formData.photoName}
          </p>
          <br />
          <Button
            label="Clear & Reset"
            color="secondary"
            onClick={handleClear}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>1. Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <label>2. Username *</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>
            3. Aadhar Name * (Must match Username)
          </label>
          <input
            type="text"
            name="aadharName"
            value={formData.aadharName}
            onChange={handleChange}
          />

          <label>4. Aadhar Number *</label>
          <input
            type="text"
            name="aadharNumber"
            maxLength="12"
            value={formData.aadharNumber}
            onChange={handleChange}
          />

          <label>5. Date of Birth (Optional)</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label>6. Gender (Optional)</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>7. Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>8. Phone Number * (10 Digits Only)</label>
          <input
            type="text"
            name="phone"
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>9. Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>10. Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <label>11. Educational Qualification *</label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option value="">-- Select Qualification --</option>
            <option value="12th">12th Standard</option>
            <option value="Degree">Bachelor Degree</option>
            <option value="Master">Master Degree</option>
          </select>

          <label>12. Nationality *</label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          >
            <option value="Indian">Indian</option>
            <option value="NRI">NRI</option>
          </select>

          <label>13. Preferred Language *</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="">-- Select Language --</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
          </select>

          <label>14. Permanent Address *</label>
          <textarea
            name="permAddress"
            rows="2"
            value={formData.permAddress}
            onChange={handleChange}
          ></textarea>

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleCheckbox}
            />
            <span>Same as Permanent Address</span>
          </div>

          <label>15. Current Address *</label>
          <textarea
            name="currAddress"
            rows="2"
            value={formData.currAddress}
            onChange={handleChange}
            readOnly={formData.sameAddress}
          ></textarea>

          <label>16. Profile Photo * (Max 2MB)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
          />
          {formData.photoName && (
            <small className="file-name">
              File: {formData.photoName}
            </small>
          )}

          <div className="btn-row">
            <Button
              label="Clear"
              color="danger"
              onClick={handleClear}
            />
            <Button
              label="Submit"
              color="success"
              type="submit"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
