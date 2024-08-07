import React, { useState } from "react";
import "./ContactContent.scss";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [complete, setComplete] = useState(false);

  const contactInfo = [
    { icon: "📍", label: "Address", value: "대구" },
    { icon: "📞", label: "Phone", value: "010-5116-5535" },
    { icon: "✉️", label: "Email", value: "svx327@gmail.com" },
    { icon: "💼", label: "Github", value: "miss-gif" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result === "success") {
          setComplete(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          console.error("Form submission error:", response);
        }
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
      });
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
        {!complete ? (
          <form
            className="contact-form"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyeWNQ90Hjbb1Pd7iKaRdHbHY1wVfNO7v_0g_Ky-cK60d6HkKXf1d7If58fPVg9rwp_ZA/exec"
            onSubmit={handleSubmit}
          >
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
                  내용
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

              <fieldset
                className="contact-form__group honeypot-field"
                style={{ display: "none" }}
              >
                <label htmlFor="honeypot">
                  스팸 방지를 위해 빈 칸으로 제출해야 하는 숨겨진 필드입니다.
                  작성하지 마세요!
                </label>
                <input id="honeypot" type="text" name="honeypot" value="" />
              </fieldset>

              <button type="submit" className="contact-form__submit-button">
                보내기
              </button>
            </div>
          </form>
        ) : (
          <div className="thankyou_message">
            <h2>
              <em>감사합니다</em> 연락주셔서 감사합니다! 곧 답변드리겠습니다.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactContent;
