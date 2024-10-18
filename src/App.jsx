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
import Designers from "./pages/Designers";
import MustRead from "./pages/MustRead";
import Blog from "./pages/Blog";
import G2024 from "./pages/galleries/G2024";
import G2023 from "./pages/galleries/G2023";


function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/password_reset" element={<PasswordResetRequest />} />
        <Route path="/password-reset/:token" element={<PasswordReset/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/must-read" element={<MustRead />} />
 
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/designers" element={<Designers/>} />
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/gallery/g-2024" element={<G2024/>}/>
          <Route path="/gallery/g-2023" element={<G2023/>}/> */}
        </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designers" element={<Designers/>} />
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/gallery/g-2024" element={<G2024/>}/>
          <Route path="/gallery/g-2023" element={<G2023/>}/>

      </Routes>
    </>
  );
}

export default App;
