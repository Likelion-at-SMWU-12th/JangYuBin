import React from "react";
import { useGetPost } from "../queries";

const MyPage = () => {
  const userId = 123;
  const { data, isLoading, isError } = useGetPost(userId);

  const userInfo = data ?? {};

  if (isLoading) {
    return (
      <div>
        <h2>User Infomation</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>User Infomation</h2>
        <p>Error!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Infomation</h2>
      <p>Username : {userInfo.username}</p>
      <button>회원 정보 삭제</button>
    </div>
  );
};

export default MyPage;
