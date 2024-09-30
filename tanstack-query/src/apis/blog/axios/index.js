import axios from "axios";

export const createPost = async (newPost) => {
  const { data } = await axios.post("/api/posts", newPost);
  return data;
};

export const modifyPost = async (newPost, postId) => {
  const { data } = await axios.post(`/api/posts/${postId}`, newPost);
  return data;
};

export const getPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`/api/posts/${postId}`);
  return data;
};
