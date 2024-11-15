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
import Arcade from "./pages/galleries/Arcade";
import Bridal from "./pages/galleries/Bridal";
import Urban from "./pages/galleries/Urban";
import Elalmor from "./pages/galleries/Elalmor";


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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designers" element={<Designers/>} />
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          <Route path="/blog" element={<Blog/>} />
          {/* <Route path="/gallery/arcade-fashion-weekend" element={<G2024/>}/> */}
          <Route path="/gallery/arcade-fashion-weekend" element={<Arcade/>}/>
          <Route path="/gallery/bridal-fashion-week" element={<Bridal/>}/>
          <Route path="/gallery/urban-style-fashion" element={<Urban/>}/>
          <Route path="/gallery/el-almor" element={<Elalmor/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
