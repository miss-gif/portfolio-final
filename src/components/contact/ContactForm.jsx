// ContactForm.js
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해 주세요."),
  message: z.string().min(1, "메시지를 입력해 주세요."),
  honeypot: z.string().optional(),
});

const ContactForm = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
        onSubmitSuccess();
      } else {
        console.error("Form submission error:", response.data);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
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
            <p className="contact-form__error">{errors.message.message}</p>
          )}
        </fieldset>

        <fieldset
          className="contact-form__group honeypot-field"
          style={{ display: "none" }}
        >
          <label htmlFor="honeypot">
            스팸 방지를 위해 빈 칸으로 제출해야 하는 숨겨진 필드입니다. 작성하지
            마세요!
          </label>
          <input
            id="honeypot"
            name="honeypot"
            type="text"
            {...register("honeypot")}
          />
        </fieldset>

        <button type="submit" className="contact-form__submit-button">
          보내기
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
