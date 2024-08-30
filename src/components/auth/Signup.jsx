import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { auth, db, storage } from "../../firebaseConfig.js";
import { useStore } from "../../store/store.jsx";
import InputField from "./InputField.jsx"; // 공통 InputField 컴포넌트 임포트

// 회원가입 유효성 검사 스키마
const joinSchema = z.object({
  name: z.string().min(1, "이름은 필수항목입니다."),
  email: z
    .string()
    .min(1, "이메일은 필수항목입니다.")
    .email("유효한 이메일 주소를 입력하세요."),
  pw: z
    .string()
    .min(6, "비밀번호는 최소 6자이상입니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}[^\s]*$/,
      "알파벳, 숫자, 특수문자를 포함해야 합니다."
    ),
});

const Signup = ({ onSwitchToLogin }) => {
  const joinForm = useForm({
    defaultValues: { name: "", email: "", pw: "", image: null },
    resolver: zodResolver(joinSchema),
    mode: "onChange",
  });

  const { setRUserData, setLoggedIn } = useStore();
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      joinForm.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async () => {
    const formData = joinForm.getValues();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.pw
      );
      setRUserData(userCredential.user);
      setLoggedIn(true);

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
      onSwitchToLogin();
      toast.success("회원가입이 완료되었습니다!");
    } catch (error) {
      handleAuthError(error);
      toast.error("회원가입에 실패했습니다.");
    }
  };

  const handleAuthError = (error) => {
    let message = "";
    switch (error.code) {
      case "auth/email-already-in-use":
        message = "이미 사용 중인 이메일입니다.";
        break;
      case "auth/invalid-email":
        message = "유효하지 않은 이메일 주소입니다.";
        break;
      default:
        message = "오류가 발생했습니다. 다시 시도해주세요.";
    }
    setError(message);
    toast.error(message);
  };

  const resetForm = () => {
    setError("");
    setPreviewImage(null);
    joinForm.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form
        onSubmit={joinForm.handleSubmit(handleRegister)}
        className="mb-2 w-80"
      >
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
          onClick={onSwitchToLogin}
        >
          이미 계정이 있습니까?
        </button>
      </form>
    </div>
  );
};

export default Signup;
