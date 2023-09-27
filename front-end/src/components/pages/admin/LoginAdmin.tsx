import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from "@mantine/core";
import axios from "axios";

export const LoginAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT_PROD}/api/auth/login`,
        {
          username,
          password,
        }
      );
      if (response) {
        console.log(response.data);
        const token = JSON.stringify(response.data.HEADER_TOKEN);
        localStorage.setItem("jwtToken", token);
        navigate("/admin");
      }

      // Store the token in localStorage or a cookie for future requests.
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <Flex
      direction="column"
      m={64}
      align="center"
      w="100%"
      justify="center"
      gap={24}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Flex>
  );
};
