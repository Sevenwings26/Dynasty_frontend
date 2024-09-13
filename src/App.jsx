import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
import DesignerRegistrationForm from "./pages/DesignerRegistrationForm";
import Gallery from "./pages/Gallery";
import MustRead from "./pages/MustRead";
import Blog from "./pages/Blog";


function App() {
  const location = useLocation();

  // Condition to hide navbar on specific routes
  const noNavbar =
    location.pathname === "/register" ||
    location.pathname === "/" ||
    location.pathname.includes("password") ||
    location.pathname === "/login";

  return (
    <>
      {/* { !noNavbar && <Navbar /> }  Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/password_reset" element={<PasswordResetRequest />} />
        <Route path="/password-reset/:token" element={<PasswordReset/>}/>

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/must-read" element={<MustRead />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
