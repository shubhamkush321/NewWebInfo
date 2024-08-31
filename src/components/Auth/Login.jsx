import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import "./Login.css";
import { SERVERAPI } from "../../common/common";
import CircleLoader from 'react-spinners/CircleLoader'; 

const Login = () => {
  const [formClass, setFormClass] = useState("");
  const [eyeSize, setEyeSize] = useState({ width: "50px", height: "50px" });
  const [validationClass, setValidationClass] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [isFormVisible, setIsFormVisible] = useState(true); // State for form visibility
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
    setLoading(true); // Show spinner
    setIsFormVisible(false); // Hide form

    try {
      const response = await axios.post(`${SERVERAPI}/api/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success('Welcome Admin!', { autoClose: 3000 }); // Show success message
      setTimeout(() => {
        navigation("/admin"); // Navigate after toast message
      }, 2000); // Adjust timing to match toast duration
    } catch (error) {
      console.log(error);
      setValidationClass("wrong-entry");
      setIsFormVisible(true); // Show form on error
      setLoading(false); // Hide spinner
      setTimeout(() => {
        setValidationClass("");
      }, 1000);
    } finally {
      if (loading) {
        setLoading(false); // Hide spinner in case of any unexpected errors
      }
    }
  };

  return (
    <div className="relative">
      {isFormVisible && (
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
      )}

      {/* Spinner with blur effect */}
      {loading && (
        <div className="flex justify-center items-center mt-96">
          <CircleLoader color="#00abff" />
        </div>
      )}

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;