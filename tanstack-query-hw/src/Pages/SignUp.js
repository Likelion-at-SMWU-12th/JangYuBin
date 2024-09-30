import React, { useState } from "react";
import { signUp } from "../api";
import { useSignUp } from "../queries";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSignUp({ username, password });

  return (
    <div>
      <form>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={mutate}>sign up</button>
    </div>
  );
};

export default SignUp;
