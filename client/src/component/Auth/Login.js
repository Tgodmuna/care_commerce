import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginMessage from "./LoginMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [showForgotPasswordMessage, setShowForgotPasswordMessage] =
    useState(false);

  const closeMessage = () => {
    setShowMessage(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordMessage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        console.log("Login result:", result.data);

        if (result.data.status === "success") {
          setShowMessage(true);
          setMessage("Login successful");
          console.log("Redirecting to dashboard");
          navigate("/dashboard");
        } else if (result.data.message === "invalid credentials") {
          setShowMessage(true);
          setMessage("Invalid password. Please try again.");
        } else if (result.data.message === "User doesn't exist") {
          setShowMessage(true);
          setMessage("No record found. Please register first.");
        }
      })
      .catch((err) => {
        console.error("Error response:", err.response);
        if (err.response && err.response.data) {
          console.error("Error data:", err.response.data);
        }
      });
  };

  return (
    <section>
      <div>
        <h1>Login to your account</h1>
      </div>

      <div>
        <form action="#" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <button onClick={handleForgotPassword}>
                Forgot your password?
              </button>
              {showForgotPasswordMessage && (
                <p>A password reset email has been sent to your inbox.</p>
              )}
            </div>
          </div>

          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>

      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>

      <div>
        <button onClick={() => navigate("/register")}>
          <span>You don't have an account</span>
        </button>
      </div>

      {showMessage && <LoginMessage message={message} onClose={closeMessage} />}
    </section>
  );
};

export default Login;
