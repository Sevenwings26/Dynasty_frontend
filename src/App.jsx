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
import Arcade from "./pages/galleries/Arcade";
import Bridal from "./pages/galleries/Bridal";
import Urban from "./pages/galleries/Urban";
import Elalmor from "./pages/galleries/Elalmor";
import DesignerDetail1 from "./pages/designers/DesignerDetail1";
import DesignerDetail2 from "./pages/designers/DesignerDetail2";
import DesignerDetail3 from "./pages/designers/DesignerDetail3";
import DesignerDetail4 from "./pages/designers/DesignerDetail4";


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
        <Route path="/blog" element={<Blog/>} />

        {/* gallery and pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/arcade-fashion-weekend" element={<Arcade/>}/>
        <Route path="/gallery/bridal-fashion-week" element={<Bridal/>}/>
        <Route path="/gallery/urban-style-fashion" element={<Urban/>}/>
        <Route path="/gallery/el-almor" element={<Elalmor/>}/>

        {/* for the designers, connect with trending events for now */}
        <Route path="/designers" element={<Designers/>} />
        <Route path="/designers/fabrique-beauty" element={<DesignerDetail1/>} />
        <Route path="/designers/dhven-touch" element={<DesignerDetail2/>} />
        <Route path="/designers/odesbaba-couture" element={<DesignerDetail3/>} />
        <Route path="/designers/rm-atelier" element={<DesignerDetail4/>} />


        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          {/* <Route path="/gallery/arcade-fashion-weekend" element={<G2024/>}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
