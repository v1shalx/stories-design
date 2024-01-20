import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    roleSeeking: '',
    resume: null,
    message: '',
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
      resume: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
      <div>
       
        <form onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 style={{ backgroundColor: '#806444', color: '#f9f7ef', padding: '15px', textAlign: 'center' }}>
          Let's Create Your Story
        </h2>
      </div>
      <div className="form-body">
      <div className="form-row">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
        />
      </div>

      <div className="form-row">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          placeholder="Contact Number"
        />
      </div>
      <div className="form-row">
          <select
            id="roleSeeking"
            name="roleSeeking"
            value={formData.roleSeeking}
            onChange={handleChange}
            required
          >
            <option value="">I'm Looking For a Full-Time Role</option>
            <option value="internship">I'm Looking For a Internship</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="resume">Upload Your CV:</label>
          <input type="file" id="resume" name="resume" onChange={handleFileChange} required  />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Hello I'm interested in..."
          />
        </div>
        <button type="submit" className="small-button">Send</button>
      </div>
    </form>
      </div>  
    
  );
}

export default ContactForm;
