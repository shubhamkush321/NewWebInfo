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
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball" style={eyeSize}></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball" style={eyeSize}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form
        className={`${formClass} ${validationClass}`}
        onSubmit={handleSubmit} // Adds the handleSubmit function to form submission
      >
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Admin Login
        </h1>
        <div className="form-group">
          <input
            required
            className="form-control"
            onBlur={handleFocusOut}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label">Username</label>
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            required
            className="form-control"
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label">Password</label>
          {validationClass === "wrong-entry" && (
            <p className="alert">Invalid Credentials..!!</p>
          )}
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        <div className="ml-24 mt-2">
          <a
            href="/forgot-password"
            className="font-semibold text-gray-800 hover:text-red-500"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
