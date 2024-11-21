import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import { FaInstagram } from 'react-icons/fa';

// Modal component
const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // EmailJS submission function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fzvt76b', 'template_hu5iish', form.current, {
        publicKey: '4PKHjOZ9LmmXYSu-e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setModalMessage('Your message has been sent successfully!');
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setModalMessage('Something went wrong. Please try again later.');
          setShowModal(true);
        }
      );
  };

  const handleCloseModal = () => {
    setShowModal(false);
    form.current.reset(); // Reset the form after modal closes
  };

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
          <h3>Phone</h3>
          <a href="tel:+447459507291">+447459507291</a>

          <h3>Email</h3>
          <a href="mailto:contact@be-decor.com">contact@be-decor.com</a>

          <h3>Social Media</h3>
          <div className="social-media">
            <a href="https://www.instagram.com/bedecorltd/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center: Contact Form */}
        <div className="contact-form">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" placeholder="First Name" name="from_name" required />
              <input type="text" placeholder="Last Name" name="last_name" required />
            </div>
            <input type="email" placeholder="Email *" name="user_email" required />
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right Side: Full-Height Background Image */}
        <div className="contact-image"></div>
      </div>

      {/* Modal */}
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Contact;
