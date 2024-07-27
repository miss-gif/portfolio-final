import React from "react";
import "./contact.scss";
import ContactContent from "./ContactInfo";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">contact</h2>
      <p className="section__subtitle">
        My <span>연락처</span>
      </p>
      <div className="contact__container container">
        <ContactContent />
      </div>
    </section>
  );
};

export default Contact;
