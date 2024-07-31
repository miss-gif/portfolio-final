import React, { useState } from "react";
import "./ContactForm.scss";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    { icon: "📍", label: "Address", value: "대구광역시" },
    { icon: "📞", label: "Phone", value: "010-5116-5535" },
    { icon: "✉️", label: "Email", value: "svx327@gmail.com" },
    { icon: "💼", label: "Github", value: "https://github.com/miss-gif" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-content">
      <div className="contact-content__info">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-info__item">
            <span className="contact-info__icon" aria-hidden="true">
              {info.icon}
            </span>
            <div className="contact-info__details">
              <p className="contact-info__label">{info.label}</p>
              <p className="contact-info__value">{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-content__form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__elements">
            <fieldset className="contact-form__group">
              <label htmlFor="name" className="contact-form__label">
                이름
              </label>
              <input
                id="name"
                name="name"
                className="contact-form__input"
                required
                placeholder="귀하의 성함을 적어주세요."
                value={formData.name}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="contact-form__group">
              <label htmlFor="email" className="contact-form__label">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="contact-form__input"
                required
                placeholder="답변받으실 이메일 주소를 적어주세요."
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="contact-form__group">
              <label htmlFor="message" className="contact-form__label">
                메세지
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="contact-form__textarea"
                required
                placeholder="궁금하신 점이 있으시면 언제든지 문의해 주세요."
                value={formData.message}
                onChange={handleChange}
              />
            </fieldset>

            <button type="submit" className="contact-form__submit-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
