import "./App.css";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import React, { useState } from "react";
import Feed from "../feed/Feed";
import UserProfile from "../profile/userProfile"
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Feed navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="/signup" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/profile" element ={<UserProfile navigate={useNavigate()} />} />
    </Routes>
  );
};

export default App;
