import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+1 234 123 1234</h2>
              <h2>+1 234 123 1234</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>info@gmail.com</h2>
              <h2>abcd@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>Fatikchhari, Chittagong, Bangladesh</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
