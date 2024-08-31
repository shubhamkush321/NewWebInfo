import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { SERVERAPI } from "../../common/common";

const Login = () => {
  const [formClass, setFormClass] = useState("");
  const [eyeSize, setEyeSize] = useState({ width: "50px", height: "50px" });
  const [validationClass, setValidationClass] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = document.documentElement.clientWidth / 15;
      const dh = document.documentElement.clientHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;
      setEyeSize({ width: `${x}px`, height: `${y}px` });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleFocusIn = () => {
    setFormClass("up");
  };

  const handleFocusOut = () => {
    setFormClass("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    try {
      const response = await axios.post(`${SERVERAPI}/api/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigation("/admin");
    } catch (error) {
      console.log(error);
      setValidationClass("wrong-entry");
      setTimeout(() => {
        setValidationClass("");
      }, 3000);
    }
  };

  return (
    <div>
      <div class="panda">
        <div class="ear"></div>
        <div class="face">
          <div class="eye-shade"></div>
          <div class="eye-white">
            <div class="eye-ball" style={eyeSize}></div>
          </div>
          <div class="eye-shade rgt"></div>
          <div class="eye-white rgt">
            <div class="eye-ball" style={eyeSize}></div>
          </div>
          <div class="nose"></div>
          <div class="mouth"></div>
        </div>
        <div class="body"></div>
        <div class="foot">
          <div class="finger"></div>
        </div>
        <div class="foot rgt">
          <div class="finger"></div>
        </div>
      </div>
      <form
        class={`${formClass} ${validationClass}`}
        onSubmit={handleSubmit} // Adds the handleSubmit function to form submission
      >
        <div class="hand"></div>
        <div class="hand rgt"></div>
        <h1 class="text-2xl font-bold text-center mb-8 text-gray-800">
          Admin Login
        </h1>
        <div class="form-group">
          <input
            required
            class="form-control"
            onBlur={handleFocusOut}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label class="form-label">Username</label>
        </div>
        <div class="form-group">
          <input
            id="password"
            type="password"
            required
            class="form-control"
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label">Password</label>
          {validationClass === "wrong-entry" && (
            <p class="alert">Invalid Credentials..!!</p>
          )}
          <button type="submit" class="btn">
            Login
          </button>
        </div>
        <div class="ml-24 mt-2">
          <a
            href="/forgot-password"
            class="font-semibold text-gray-800 hover:text-red-500"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
