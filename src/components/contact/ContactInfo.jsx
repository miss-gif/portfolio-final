import React, { useState } from "react";
import "./contactInfo.scss";

const ContactInfo = ({ icon, label, value }) => (
  <div className={`contact__info ${label.toLowerCase()}`}>
    <span className="material-symbols-outlined" aria-hidden="true">
      {icon}
    </span>
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot === "") {
      onSubmit(formData);
    }
  };

  return (
    <form className="gform" method="POST" onSubmit={handleSubmit}>
      <div className="form-elements">
        <fieldset className="pure-group">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            name="name"
            required
            placeholder="귀하의 성함을 적어주세요."
            value={formData.name}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="pure-group">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="답변받으실 이메일 주소를 적어주세요."
            value={formData.email}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="pure-group">
          <label htmlFor="message">메세지</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            required
            placeholder="궁금하신 점이 있으시면 언제든지 문의해 주세요."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <p>보내신 이메일은 확인 후 2일 이내에 회신드리겠습니다.</p>
        <p>※하루에 보낼 수 있는 메일 수에 제한이 있을 수 있습니다.</p>
        <p>
          <b>
            개인정보 수집·이용 동의서 <br />
          </b>
          수집 목적 : 이메일 회신 <br />
          수집 항목 : 이름, 이메일 보유·이용 기간 : 수집일로부터 30일 <br />
          ※ 동의를 거부할 권리가 있습니다. <br />
          다만, 필수 동의 거부 시 서비스가 제한될 수 있습니다. <br />위 개인정보
          수집·이용에 동의 합니다. (선택)
        </p>

        <fieldset className="pure-group">
          <label htmlFor="consent">동의합니다.</label>
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="pure-group honeypot-field">
          <label htmlFor="honeypot" className="sr-only">
            To help avoid spam, utilize a Honeypot technique with a hidden text
            field; must be empty to submit the form! Otherwise, we assume the
            user is a spam bot.
          </label>
          <input
            id="honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="sr-only"
          />
        </fieldset>

        <button type="submit" className="">
          Send
        </button>
      </div>

      <div className="thankyou_message" style={{ display: "none" }}>
        <h2>연락주셔서 감사합니다! 곧 다시 연락드리겠습니다!</h2>
      </div>
    </form>
  );
};

const ContactContent = () => {
  const contactInfo = [
    { icon: "map", label: "Address", value: "aaaaaa" },
    { icon: "person", label: "Freelance", value: "aaaaaa" },
    { icon: "mail", label: "Email", value: "aaaaaa" },
    { icon: "phone_iphone", label: "Phone", value: "aaaaaa" },
  ];

  const handleSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-content">
      <div className="contact__left">
        {contactInfo.map((info, index) => (
          <ContactInfo
            key={index}
            icon={info.icon}
            label={info.label}
            value={info.value}
          />
        ))}
      </div>
      <div className="contact__right">
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactContent;
