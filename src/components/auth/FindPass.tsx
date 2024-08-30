import { zodResolver } from "@hookform/resolvers/zod";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";

// 초기 상태 인터페이스
interface FindPassState {
  email: string;
}

// 초기 상태 값
const initFindPassState: FindPassState = {
  email: "",
};

// Zod 스키마 정의
const findPassSchema = z.object({
  email: z
    .string()
    .nonempty("이메일은 필수항목입니다.")
    .email("유효한 이메일 주소를 입력하세요."),
});

// 폼 데이터 타입
type FindPassFormData = z.infer<typeof findPassSchema>;

const FindPass: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FindPassFormData>({
    defaultValues: initFindPassState,
    resolver: zodResolver(findPassSchema),
    mode: "onChange",
  });

  // 데이터 전송 핸들러
  const handleFindPassSubmit: SubmitHandler<FindPassFormData> = async (
    data
  ) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success("등록된 이메일로 메일을 발송했습니다.");
      navigate("/auth");
    } catch (error) {
      handleAuthError(error);
      toast.error("비밀번호 찾기에 실패했습니다.");
    }
  };

  const handleAuthError = (error) => {
    let message = "";
    switch (error.code) {
      case "auth/user-not-found":
        message = "이메일을 찾을 수 없습니다.";
        break;
      default:
        message = "이메일을 확인해 주세요.";
    }
    toast.error(message);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">비밀번호 찾기</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
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
