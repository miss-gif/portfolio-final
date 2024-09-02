import { create } from "zustand";

export const useStore = create((set) => ({
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  rUserData: JSON.parse(localStorage.getItem("rUserData")) || null,
  setLoggedIn: (status) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(status));
    set({ isLoggedIn: status });
  },
  setRUserData: (data) => {
    localStorage.setItem("rUserData", JSON.stringify(data));
    set({ rUserData: data });
  },
  clearUserData: () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rUserData");
    set({ rUserData: null, isLoggedIn: false });
  },
}));
