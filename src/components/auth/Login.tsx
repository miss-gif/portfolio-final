import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { auth } from "../../firebaseConfig";
import { useStore } from "../../store/store";
import InputField from "./InputField"; // 공통 InputField 컴포넌트 임포트

// 로그인 유효성 검사 스키마
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일은 필수항목입니다.")
    .email("유효한 이메일 주소를 입력하세요."),
  pw: z
    .string()
    .min(6, "비밀번호는 최소 6자이상입니다.")
    .max(12, "비밀번호는 최대 12자입니다."),
});

const testId = "test01@a.net";

const Login = ({ onSwitchToSignup }) => {
  const loginForm = useForm({
    defaultValues: { email: testId, pw: testId },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { setRUserData, setLoggedIn } = useStore();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.pw
      );
      setRUserData(userCredential.user);
      setLoggedIn(true);
      navigate("/notice");
      toast.success("로그인 되었습니다.");
    } catch (error) {
      handleAuthError(error);
      toast.error("로그인에 실패했습니다.");
    }
  };

  const handleAuthError = (error) => {
    let message = "";
    switch (error.code) {
      case "auth/user-not-found":
        message = "사용자를 찾을 수 없습니다.";
        break;
      case "auth/wrong-password":
        message = "비밀번호가 틀렸습니다.";
        break;
      case "auth/invalid-email":
        message = "유효하지 않은 이메일 주소입니다.";
        break;
      default:
        message = "오류가 발생했습니다. 다시 시도해주세요.";
    }
    toast.error(message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">로그인</h1>
      <form
        onSubmit={loginForm.handleSubmit(handleLogin)}
        className="mb-2 w-80"
      >
        <InputField
          label="이메일"
          register={loginForm.register("email")}
          error={loginForm.formState.errors.email}
          type="email"
        />
        <InputField
          label="비밀번호"
          register={loginForm.register("pw")}
          error={loginForm.formState.errors.pw}
          type="password"
        />
        <button
          type="submit"
          className="mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-80"
        >
          로그인
        </button>
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={onSwitchToSignup}
        >
          계정 만들기
        </button>
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => {
            navigate("/auth/findpass");
          }}
        >
          비밀번호 찾기
        </button>
      </form>
    </div>
  );
};

export default Login;
