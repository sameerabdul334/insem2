import { createContext, useContext, useState } from "react";
import { apiRequest } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [student, setStudent] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("studentInfo") || "null"); }
    catch { return null; }
  });

  async function login(email, password) {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    sessionStorage.setItem("studentToken", data.token);
    sessionStorage.setItem("studentInfo", JSON.stringify(data.student));
    setStudent(data.student);
  }

  function logout() {
    sessionStorage.removeItem("studentToken");
    sessionStorage.removeItem("studentInfo");
    setStudent(null);
  }

  return <AuthContext.Provider value={{ student, login, logout }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
