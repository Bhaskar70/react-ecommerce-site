import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginComponent.scss'

export const LoginComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    if (username && password) {
      axios
        .post("https://fakestoreapi.com/auth/login", { username, password })
        .then((response: any) => {
          console.log(response, "123::");
          localStorage.setItem("token", response.data.token);
          navigate("/home");
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Please login to continue</p>
        <input
          className="login-input"
          type="text"
          onChange={(event: any) => setUsername(event.target.value)}
          placeholder="Enter Username"
        />
        <input
          className="login-input"
          type="password"
          onChange={(event: any) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
        <button className="login-btn" onClick={handleSubmitClick}>
          Login
        </button>
      </div>
    </div>
  );
};
