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
    <div className="flex items-center justify-center min-h-screen">
      <div className=" bg-slate-800 rounded p-8 flex flex-col gap-4 shadow-2xl">
        <h2 className="text-4xl font-bold">Login</h2>
        <p className="text-slate-400">
          테스트 위한 계정 정보가 입력되어 있습니다
        </p>
        <form
          onSubmit={loginForm.handleSubmit(handleLogin)}
          className="mb-2 w-80 "
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
            className="mb-2 p-2 bg-slate-600 text-white rounded hover:bg-slate-700 w-80"
          >
            로그인
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              className="text-slate-500 hover:underline hover:text-white"
              onClick={onSwitchToSignup}
            >
              계정 만들기
            </button>
            <button
              type="button"
              className="text-slate-500 hover:underline hover:text-white"
              onClick={() => {
                navigate("/auth/findpass");
              }}
            >
              비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
