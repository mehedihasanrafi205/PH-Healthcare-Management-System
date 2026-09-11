import apiClient from "@/lib/apiClient";


const userLogin = (payload: { email: string; password: string }) => {
  return apiClient("/auth/login", { method: "POST", body: payload });
};

export default userLogin;
