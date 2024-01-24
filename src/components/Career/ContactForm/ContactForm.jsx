import React, { useState } from 'react';
import './ContactForm.css';
// import CareerSection from './CareerSection';

function CustomContactForm() {
  const [formData, setFormData] = useState({
    customName: '',
    customLastName: '',
    customEmail: '',
    customContactNumber: '',
    customRoleSeeking: '',
    customResume: null,
    customMessage: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      customResume: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div>
      <div className="custom-career-section">
        
        <div className="custom-career-content">
          <h2>Joining The Stories Team</h2>
          <p>
            Stories Design Studio, an interior designing firm, based in Bangalore, has its foundation in people with a passion for creating something unique. We are always looking for talented people and would love to hear from you. If you are interested in joining our team, write to us at hr@storiesdesignstudio.com to submit your resume and portfolio.
          </p>
        </div>
      </div>
      <div className="custom-form-header">
        <h2>
          Let's Create Your Story
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="custom-form-body">
          <div className="custom-form-row">
            <input
              type="text"
              id="customName"
              name="customName"
              value={formData.customName}
              onChange={handleChange}
              required
              placeholder="Name"
            />
            <input
              type="text"
              id="customLastName"
              name="customLastName"
              value={formData.customLastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
            />
          </div>

          <div className="custom-form-row">
            <input
              type="email"
              id="customEmail"
              name="customEmail"
              value={formData.customEmail}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            <input
              type="tel"
              id="customContactNumber"
              name="customContactNumber"
              value={formData.customContactNumber}
              onChange={handleChange}
              required
              placeholder="Contact Number"
            />
          </div>
          <div className="custom-form-row">
            <select
              id="customRoleSeeking"
              name="customRoleSeeking"
              value={formData.customRoleSeeking}
              onChange={handleChange}
              required
            >
              <option value="Full-time">I'm Looking For a Full-Time Role</option>
              <option value="internship">I'm Looking For an Internship</option>
            </select>
          </div>

          <div className="custom-form-row">
            <label htmlFor="customResume">Upload Your CV:</label>
            <input type="file" id="customResume" name="customResume" onChange={handleFileChange} required />
            <textarea
              id="customMessage"
              name="customMessage"
              value={formData.customMessage}
              onChange={handleChange}
              required
              placeholder="Hello I'm interested in..."
            />
          </div>
          <button type="submit" className="custom-small-button">Send</button>
        </div>
      </form>
      {/* <CareerSection/> */}
    </div>
  );
}

export default CustomContactForm;
