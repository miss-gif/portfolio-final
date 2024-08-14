import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "zustand";
import { auth, db, storage } from "../../firebaseConfig";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zustand 상태 관리
const useStore = create((set) => ({
  rUserData: null,
  setRUserData: (data) => set({ rUserData: data }),
}));

// 로그인 및 회원가입 유효성 검사 스키마
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

const joinSchema = z.object({
  name: z.string().min(1, "이름은 필수항목입니다."),
  email: z
    .string()
    .min(1, "이메일은 필수항목입니다.")
    .email("유효한 이메일 주소를 입력하세요."),
  pw: z
    .string()
    .min(6, "비밀번호는 최소 6자이상입니다.")
    .max(12, "비밀번호는 최대 12자입니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}[^\s]*$/,
      "알파벳, 숫자, 특수문자를 포함해야 합니다."
    ),
});

// 입력 필드 컴포넌트
const InputField = ({ label, register, error, ...props }) => (
  <div className="mb-2 w-80">
    <label className="block text-gray-700">{label}</label>
    <input
      {...register}
      {...props}
      className="mt-1 p-2 border border-gray-300 rounded w-full"
    />
    {error && <span className="text-red-500">{error.message}</span>}
  </div>
);

const Login = () => {
  const loginForm = useForm({
    defaultValues: { email: "", pw: "" },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const joinForm = useForm({
    defaultValues: { name: "", email: "", pw: "", image: null },
    resolver: zodResolver(joinSchema),
    mode: "onChange",
  });
  const { userCurrent, setUserCurrent } = useAuth();
  const { rUserData, setRUserData } = useStore();
  const navigate = useNavigate();

  const [isScene, setIsScene] = useState("login");
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      joinForm.setValue("image", file); // 이미지 파일 저장
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
      console.log("이미지 파일 저장 확인:", joinForm.getValues("image")); // 이미지 파일 확인
    }
  };

  const fbJoin = async () => {
    // 폼 데이터 가져오기
    const formData = joinForm.getValues();

    // 이미지 파일 수동 추가
    formData.image = joinForm.getValues("image");

    console.log("formData with image:", formData); // 이미지 포함된 데이터 확인

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.pw
      );
      setUserCurrent(userCredential.user);
      let imageUrl = "";

      if (formData.image) {
        const imageRef = ref(
          storage,
          `users/${userCredential.user.uid}/profile.png`
        );
        await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const userDoc = doc(db, "users", userCredential.user.uid);
      await setDoc(userDoc, {
        name: formData.name,
        email: formData.email,
        imageUrl,
      });

      await signOut(auth);
      resetForm();
      setIsScene("login");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const fbLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.pw);
      navigate("/profile");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case "auth/user-not-found":
        setError("사용자를 찾을 수 없습니다.");
        break;
      case "auth/wrong-password":
        setError("비밀번호가 틀렸습니다.");
        break;
      case "auth/invalid-email":
        setError("유효하지 않은 이메일 주소입니다.");
        break;
      default:
        setError("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const resetForm = () => {
    setError("");
    setPreviewImage(null);
    joinForm.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        {isScene === "login" ? "로그인" : "회원가입"}
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isScene === "login" ? (
        <form onSubmit={loginForm.handleSubmit(fbLogin)} className="mb-2 w-80">
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
            onClick={() => setIsScene("join")}
          >
            계정 만들기
          </button>
        </form>
      ) : (
        <form onSubmit={joinForm.handleSubmit(fbJoin)} className="mb-2 w-80">
          <InputField
            label="이름"
            register={joinForm.register("name")}
            error={joinForm.formState.errors.name}
            type="text"
          />
          <InputField
            label="이메일"
            register={joinForm.register("email")}
            error={joinForm.formState.errors.email}
            type="email"
          />
          <InputField
            label="비밀번호"
            register={joinForm.register("pw")}
            error={joinForm.formState.errors.pw}
            type="password"
          />
          <div className="mb-2 w-80">
            <label className="block text-gray-700">프로필 이미지</label>
            <div className="flex items-center mt-1">
              <label className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                파일 선택
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              {previewImage && (
                <img
                  src={previewImage}
                  className="ml-4 w-16 h-16 object-cover rounded-full"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mb-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-80"
          >
            회원가입
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => setIsScene("login")}
          >
            이미 계정이 있습니까?
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
