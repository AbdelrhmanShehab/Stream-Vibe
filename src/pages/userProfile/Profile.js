import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); // from your userSlice
    localStorage.removeItem("user"); // clear from storage
    navigate("/login");
  };

  return (
    <>
      <div className="main-container-home2">
        <Header />
        <div className="profile-container">
          <h1>My Profile</h1>
          {user ? (
            <div className="profile-card">
              <p>
                <strong>Name:</strong> {user.displayName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Favorite Genre:</strong> {user.genre || "N/A"}
              </p>
              <button className="main-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <p>You are not logged in.</p>
          )}
        </div>  
      </div>
      <Footer />
    </>
  );
};

export default Profile;
