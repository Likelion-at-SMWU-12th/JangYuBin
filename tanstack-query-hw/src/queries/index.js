import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api";

export const useSignUp = ({ username, password }) => {
  const navigate = useNavigate();
  console.log(!!username && !!password);

  return useMutation({
    mutationFn: () => signUp({ username, password }),
    enabled: !!username && !!password,
    onSuccess: () => {
      alert("환영합니다");
    },
    onSettled: () => {
      console.log("회원가입 요청이 전달되었습니다.");
      navigate("/myPage");
    },
  });
};
