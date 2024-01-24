// ContactForm.js

import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='careerpage'>
      <div className="section" id="join-section">
        <h2>Joining The Stories Team</h2>
        <p>
          Stories Design Studio, an interior designing firm, based in Bangalore, has its foundation in people with a passion for creating something unique. We are always looking for talented people and would love to hear from you. If you are interested in joining our team, write to us at <a href="mailto:hr@storiesdesignstudio.com">hr@storiesdesignstudio.com</a> to submit your resume and portfolio.
        </p>
      </div>
     
      <div className="contact-container">
        <div className="sections" id="your-story-section">
          <h2>Lets create Your Story</h2>
        </div>

        <div className="section" id="form-section">
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="firstName" name="firstName" placeholder='First Name:' />
              </div>
              <div className="form-group">
                <input type="text" id="lastName" name="lastName" placeholder='Last Name:' />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder='Email:' />
              </div>
              <div className="form-group">
                <input type="text" id="contactNo" name="contactNo" placeholder='Contact No:' />
              </div>
            </div>

           
            <div className="form-row">
              <div className="form-group">
                
                <select id="role" name="role">
                <option value="">I'm Looking For a Full-Time Role</option>
            <option value="internship">I'm Looking For a Internship</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cvUpload">Upload Your CV:</label>
                <input type="file" id="cvUpload" name="cvUpload" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width"> {/* Updated class to make it full width */}
                <textarea id="interest" name="interest" placeholder='I am interested in:' rows="4" />
              </div>
            </div>


            <div className="form-row">
        <button type="submit" className="custom-primary-buttonsend">
          Send
        </button>
      </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
