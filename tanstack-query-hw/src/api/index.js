import axios from "axios";

export const signUp = async (userInfo) => {
  const { data } = await axios.post("/api/signUp", userInfo);
  return data;
};

export const getUserInfo = async (userId) => {
  const { data } = await axios.get(`/api/myPage/${userId}`);
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/myPage/${userId}`);
  return data;
};

export const updateUserInfo = async (userId, username) => {
  const { data } = await axios.put(`/api/myPage/${userId}`, username);
  return data;
};
