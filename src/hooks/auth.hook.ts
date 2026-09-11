import userLogin from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export default useLogin;
