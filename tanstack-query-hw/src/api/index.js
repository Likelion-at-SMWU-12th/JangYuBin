import axios from "axios";

export const signUp = async (userInfo) => {
  const { data } = await axios.post("/api/signUp", userInfo);
  return data;
};
