import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './GetInTouch.scss';
import { FaInstagram } from 'react-icons/fa';

// Modal Component
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

function GetInTouch() {
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
    <section className="get-in-touch">
      <h2 className="get-in-touch-title">Get in Touch</h2>

      {/* Left Column - Contact Info */}
      <div className="get-in-touch-left">
        <div className="get-in-touch-content">
          <p><strong>Phone</strong><br />+447495911553</p>
          <p><strong>Email</strong><br />contact@bedecorltd.com</p>
          <div className="get-in-touch-socials">
            <a href="https://www.instagram.com/bedecorltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="get-in-touch-right">
        <form ref={form} className="get-in-touch-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="last_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="get-in-touch-submit">Send</button>
        </form>
      </div>

      {/* Modal */}
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </section>
  );
}

export default GetInTouch;
