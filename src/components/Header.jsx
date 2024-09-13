import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import arcadedynasty from '../assets/logo/arcadedynasty.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user authentication status from localStorage or a more reliable source
    const token = localStorage.getItem('Token'); // Ensure you use the correct key for token
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of a token
  }, []);

  const handleLogout = () => {
    // Clear user session, tokens, etc.
    localStorage.removeItem('Token'); // Remove the token from localStorage
    setIsLoggedIn(false); // Update the state to reflect logout
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white drop-shadow uppercase">
      <Container>
        <Navbar.Brand href="/">
            <img src={arcadedynasty} width={'140px'} alt="Arcade Dynasty" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/" className='nav-link m-2'>
              Home
            </Link>
            <Link to="/blog" className='nav-link m-2'>
              Blog
            </Link>
            <Link to="/gallery" className='nav-link m-2'>
              Gallery
            </Link>
            <Link to="/about" className='nav-link m-2'>
              About
            </Link>
            <Link to="/designers" className='nav-link m-2'>
              Designers
            </Link>
            {isLoggedIn ? (
              <>
                <span className='nav-link m-2' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link to="/login" className='nav-link m-2'>
                  Login
                </Link>
                <Link to="/register" className='nav-link m-2'>
                  Sign up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


// // Header.jsx
// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import arcadedynasty from '../assets/logo/arcadedynasty.png';
// import { useAuth } from '../api/AuthContext.jsx';

// function Header() {
//     const { user, setUser } = useAuth();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('Token');
//         setUser(null);  // Clear the user data from context
//         navigate('/login');
//     };

//     return (
//         <Navbar collapseOnSelect expand="lg" className="bg-white drop-shadow uppercase">
//             <Container>
//                 <Navbar.Brand href="/">
//                     <img src={arcadedynasty} width={'140px'} alt="Arcade Dynasty" />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto"></Nav>
//                     <Nav>
//                         <Link to="/" className='nav-link m-2'>Home</Link>
//                         <Link to="/blog" className='nav-link m-2'>Blog</Link>
//                         <Link to="/gallery" className='nav-link m-2'>Gallery</Link>
//                         <Link to="/about" className='nav-link m-2'>About</Link>
//                         <Link to="/designers" className='nav-link m-2'>Designers</Link>
//                         {user ? (
//                             <>
//                                 <span className='nav-link m-2'>{user.username}</span>
//                                 <span className='nav-link m-2' onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
//                             </>
//                         ) : (
//                             <>
//                                 <Link to="/login" className='nav-link m-2'>Login</Link>
//                                 <Link to="/register" className='nav-link m-2'>Sign up</Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Header;
