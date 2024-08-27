import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

// 초기 상태
const initFindPassState = {
  email: "",
};

// Zod 스키마 정의
const findPassSchema = z.object({
  email: z
    .string()
    .nonempty("이메일은 필수항목입니다.")
    .email("유효한 이메일 주소를 입력하세요."),
});

const FindPass = () => {
  const navigate = useNavigate();
  // 에러 메시지
  const [erroMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initFindPassState,
    resolver: zodResolver(findPassSchema),
    mode: "onChange",
  });

  // 데이터 전송
  const handleFindPassSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      alert("비밀번호 재설정 메일을 보내드렸습니다. 확인해 주세요.");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      // const errorMessage = error.message; // 사용하지 않으므로 제거

      switch (errorCode) {
        case "auth/user-not-found":
          setErrorMessage("이메일을 찾을 수 없습니다.");
          break;
        default:
          setErrorMessage("이메일을 확인해 주세요.");
          break;
      }
    }
  };

  const handleClickBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">비밀번호 찾기</h1>
      {erroMessage && <p className="text-red-500 mb-4">{erroMessage}</p>}
      <form onSubmit={handleSubmit(handleFindPassSubmit)}>
        <div className="mb-2 w-80">
          <label className="block text-gray-700">이메일</label>
          <input
            {...register("email")}
            type="email"
            placeholder="이메일"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 mb-4">{errors.email.message}</p>
          )}
        </div>
        <div className="flex justify-between items-center gap-4 mb-2 w-80">
          <button
            className="mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-80"
            type="submit"
          >
            확인
          </button>
          <button
            className="mb-2 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-80"
            type="button"
            onClick={handleClickBack}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindPass;
