// ContactInfo.js
import React from "react";
import { FaGithub, FaPhoneSquareAlt, FaSeedling } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { IoMail } from "react-icons/io5";

const ContactInfo = ({ profile }) => {
  const contactInfo = [
    {
      icon: <FaPhoneSquareAlt />,
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
      <li className="contact-info__item">
        <div className="contact-info__details">
          <span className="contact-info__icon" aria-hidden="true">
            <FaSeedling />
          </span>
          <p className="contact-info__label">개발경력</p>
          <p className="contact-info__value">신입 (공부 2년)</p>
        </div>
      </li>
      <li className="contact-info__item">
        <div className="contact-info__details">
          <span className="contact-info__icon" aria-hidden="true">
            <ImFire />
          </span>
          <p className="contact-info__label">학습중</p>
          <p className="contact-info__value">Next, Supabase</p>
        </div>
      </li>
      <li className="contact-info__item">
        <div className="contact-info__details">
          <span className="contact-info__icon" aria-hidden="true">
            <FaMapLocationDot />
          </span>
          <p className="contact-info__label">거주지</p>
          <p className="contact-info__value">대구</p>
        </div>
      </li>
    </ul>
  );
};

export default ContactInfo;
