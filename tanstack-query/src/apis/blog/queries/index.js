import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, getPost, modifyPost } from "../axios";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};

export const useModifyPost = () => {
  return useMutation({
    mutationFn: ({ title, content, postId }) =>
      modifyPost(title, content, postId),
    enabled: !!postId,
  });
};

export const useGetPost = useQuery({
  queryKey: ["posts", postId],
  queryFn: () => getPost(postId),
  enabled: !!postId,
  staleTime: 10000,
  cacheTime: 60000,
});

const queryClient = useQueryClient();

export const useDeletePost = () => {
  return useMutation({
    mutationFn: ({ postId }) => deletePost(postId),
    onSuccess: () => {
      alert("삭제 성공");
      queryClient.invalidateQueries("postList");
    },
  });
};
