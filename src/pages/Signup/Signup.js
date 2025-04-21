import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase"; // adjust based on your path
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    genre: "adventure",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(user, {
        displayName: formData.username,
      });

      dispatch(
        loginUser({
          email: user.email,
          uid: user.uid,
          displayName: formData.username,
          genre: formData.genre,
        })
      );

      console.log("✅ Signed up:", user);
      navigate("/"); // redirect to homepage after signup
    } catch (error) {
      console.error("❌ Signup error:", error.message);
      alert(error.message);
    }
    alert(`🎉 Welcome, ${formData.username}!`);
    navigate("/");
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName || formData?.username,
        genre: formData?.genre || "unknown",
      })
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="main-container-home2">
        <Header />
        <div className="login-page signup">
          <div className="login-container">
            <h1>Sign Up </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-category">
                <label htmlFor="genre">Favourite Genre:</label>
                <select
                  className="custom-select"
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                >
                  <option value="adventure">Adventure</option>
                  <option value="drama">Drama</option>
                  <option value="action">Action</option>
                  <option value="comedy">Comedy</option>
                  <option value="si-fi">Sci-Fi</option>
                </select>
              </div>
              <button className="main-btn login-btn" type="submit">
                Sign Up
              </button>
            </form>
            <p className="login-text">
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
