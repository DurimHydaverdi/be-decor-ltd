import React from 'react';
import './Contact.scss';
import { FaInstagram } from 'react-icons/fa';
// import backgroundImage from '../../components/Assets/background3.webp';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <p>
        This is your Contact section paragraph. Encourage your reader to reach out with any questions,
        comments, or to take a different action specific to your site.
      </p>
      <h2>Let's Chat</h2>

      <div className="contact-content">
        {/* Left Side: Address Info */}
        <div className="contact-info">
          {/* <h3>Address</h3>
          <p>500 Terry Francine St. San Francisco, CA 94158</p> */}

          <h3>Phone</h3>
          <a href="tel:+447459507291">+447459507291</a>

          <h3>Email</h3>
          <a href="mailto:contact@be-decor.com">contact@be-decor.com</a>

          <h3>Social Media</h3>
          <div className="social-media">
            {/* <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i> */}
            <a href="https://www.instagram.com/bedecorltd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Center: Contact Form */}
        <div className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email *" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </div>

        {/* Right Side: Full-Height Background Image */}
        <div className="contact-image"></div>
      </div>
    </div>
  );
};

export default Contact;

