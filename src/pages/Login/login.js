import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // ✅ Now user is defined

      dispatch(
        loginUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        })
      );

      // ✅ Save to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        })
      );

      alert(`🎉 Welcome back, ${user.displayName || "User"}!`);
      navigate("/");
    } catch (error) {
      console.error("❌ Login error:", error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <div className="main-container-home2">
        <Header />
        <div className="login-page">
          <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="main-btn login-btn" type="submit">
                Login
              </button>
            </form>
            <p className="login-text">
              Don't have an account?{" "}
              <Link to="/sign-up">
                <span className="login-link">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
