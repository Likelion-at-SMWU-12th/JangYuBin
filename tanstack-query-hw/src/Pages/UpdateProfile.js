import React, { useEffect, useState } from "react";
import { useUpdateUserInfo } from "../queries";

const UpdateProfile = () => {
  const { username, setUsername } = useState("");
  const userId = 123;
  const { mutate } = useUpdateUserInfo(userId, username);

  return (
    <div>
      <h2>UpdateProfile</h2>
      <form>
        <label htmlFor="username">변경할 username : </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={mutate}>수정하기</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
