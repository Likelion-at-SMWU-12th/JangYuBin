import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUserInfo, signUp } from "../api";

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

export const useGetPost = (userId) => {
  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserInfo(userId),
    staleTime: 30000,
    cacheTime: 300000,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId }) => deleteUser(userId),
    onSuccess: () => {
      alert("삭제 성공");
      queryClient.invalidateQueries("myPage");
    },
    onSettled: () => {
      console.log("삭제 요청이 전달되었습니다.");
      window.location.reload();
    },
  });
};
