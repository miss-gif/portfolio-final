// ContactInfo.js
import React from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactInfo = ({ profile }) => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: profile.contact || "정보 없음",
    },
    { icon: <IoMail />, label: "Email", value: profile.email || "정보 없음" },
    {
      icon: <FaGithub />,
      label: "Github",
      value: profile.github || "정보 없음",
    },
  ];

  return (
    <ul className="contact-content__info">
      {contactInfo.map((info, index) => (
        <li key={index} className="contact-info__item">
          <div className="contact-info__details">
            <span className="contact-info__icon" aria-hidden="true">
              {info.icon}
            </span>
            <p className="contact-info__label">{info.label}</p>
            <p className="contact-info__value">{info.value}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
