import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./ContactContent.scss";

// Zod 스키마 정의
const schema: ZodSchema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해 주세요."),
  message: z.string().min(1, "메시지를 입력해 주세요."),
  honeypot: z.string().optional(), // 숨겨진 필드는 옵션으로 처리
});

const ContactContent = () => {
  const [complete, setComplete] = useState(false);
  const [profile, setProfile] = useState({
    contact: "",
    email: "",
    github: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/json/profile.json");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  // contactInfo 배열을 profile 데이터로 동적으로 업데이트
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

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbyeWNQ90Hjbb1Pd7iKaRdHbHY1wVfNO7v_0g_Ky-cK60d6HkKXf1d7If58fPVg9rwp_ZA/exec",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.result === "success") {
        setComplete(true);
      } else {
        console.error("Form submission error:", response.data);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  const handleReset = () => {
    setComplete(false);
    reset(); // react-hook-form의 reset 메서드를 호출하여 폼 데이터 초기화
  };

  return (
    <div className="contact-content">
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

      <div className="contact-content__form">
        {!complete ? (
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__elements">
              <fieldset className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  className="contact-form__input"
                  placeholder="귀하의 성함을 적어주세요."
                  {...register("name")}
                />
                {errors.name && (
                  <p className="contact-form__error">{errors.name.message}</p>
                )}
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
                  placeholder="답변받으실 이메일 주소를 적어주세요."
                  {...register("email")}
                />
                {errors.email && (
                  <p className="contact-form__error">{errors.email.message}</p>
                )}
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
                  placeholder="궁금하신 점이 있으시면 언제든지 문의해 주세요."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="contact-form__error">
                    {errors.message.message}
                  </p>
                )}
              </fieldset>

              {/* 스팸 방지를 위한 숨겨진 필드 추가 */}
              <fieldset
                className="contact-form__group honeypot-field"
                style={{ display: "none" }}
              >
                <label htmlFor="honeypot">
                  스팸 방지를 위해 빈 칸으로 제출해야 하는 숨겨진 필드입니다.
                  작성하지 마세요!
                </label>
                <input
                  id="honeypot"
                  name="honeypot"
                  type="text"
                  {...register("honeypot")} // react-hook-form의 register 메서드를 사용하여 숨겨진 필드 등록
                />
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
            <button onClick={handleReset}>더 보내기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactContent;
