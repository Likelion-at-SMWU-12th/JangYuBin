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
