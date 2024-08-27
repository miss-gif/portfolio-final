import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { auth, db, storage } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod 스키마 정의
const schema = z
  .object({
    name: z.string().min(1, "이름은 필수항목입니다."),
    pw: z
      .string()
      .min(6, "비밀번호는 최소 6자 이상입니다.")
      .max(12, "비밀번호는 최대 12자입니다."),
    confirmPw: z
      .string()
      .min(6, "비밀번호 확인을 입력하세요.")
      .max(12, "비밀번호 확인은 최대 12자입니다."),
    image: z.instanceof(File).optional(),
  })
  .refine((data) => data.pw === data.confirmPw, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPw"],
  });

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { userData, userCurrent, setUserData } = useAuth();
  const [previewImage, setPreviewImage] = useState(null);
  const [originImage, setOriginImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // 이미지 미리보기 처리
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file); // react-hook-form 상태에 이미지 파일을 설정
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpdate = async (data) => {
    const { name, pw, image } = data;

    const update = {};
    if (name !== userData.name) {
      update.name = name;
    }

    if (image) {
      const imageRef = ref(storage, `users/${userCurrent?.uid}/profile.png`);
      await uploadBytes(imageRef, image);
      update.imageUrl = await getDownloadURL(imageRef);
    }

    if (Object.keys(update).length > 0) {
      const userDoc = doc(db, "users", userCurrent?.uid);
      await updateDoc(userDoc, update);
      const nowData = { ...userData, ...update };
      setUserData(nowData);
    }

    if (pw) {
      try {
        await updatePassword(userCurrent, pw);
      } catch (error) {
        console.log("비밀번호 업데이트 중 오류가 발생하였습니다.", error);
      }
    }

    alert("정보가 수정 되었습니다.");
    navigate("/profile");
  };

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setPreviewImage(userData.imageUrl || "");
      setOriginImage(userData.imageUrl || "");
    }
  }, [userData, setValue]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">프로필 수정</h1>

      <form
        onSubmit={handleSubmit(handleClickUpdate)}
        className="p-4 shadow-md rounded w-80"
      >
        <div className="mb-2">
          <label className="block text-gray-700">이름</label>
          <input
            type="text"
            {...register("name")}
            placeholder="이름"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            value={userData?.email}
            readOnly
            disabled
            placeholder="이메일"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700">프로필 이미지</label>
          <div className="flex items-center mt-1">
            <label className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              파일선택
              <input
                type="file"
                onChange={handleChangeImage}
                className="hidden"
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

        <div className="mb-2">
          <label className="block text-gray-700">새 비밀번호</label>
          <input
            type="password"
            {...register("pw")}
            placeholder="새 비밀번호"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.pw && <p className="text-red-500">{errors.pw.message}</p>}
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">비밀번호 확인</label>
          <input
            type="password"
            {...register("confirmPw")}
            placeholder="비밀번호 확인"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.confirmPw && (
            <p className="text-red-500">{errors.confirmPw.message}</p>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          >
            수정
          </button>
          <button
            type="button"
            className="p-2 bg-gray-400 text-white rounded hover:bg-gray-500 w-full"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
