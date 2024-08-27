// store.js (Zustand 상태 저장소 설정)
import { create } from "zustand";

export const useStore = create((set) => ({
  isLoggedIn: false, // 기본값은 false로 설정
  rUserData: null, // 기본값은 null로 설정
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  setRUserData: (data) => set({ rUserData: data }),
  clearUserData: () => set({ rUserData: null, isLoggedIn: false }), // 사용자 데이터 및 로그인 상태 초기화
}));
