import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import arcadedynasty from '../assets/logo/arcadedynasty.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);  // Store the username
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Token');  // Check if the token is available
    if (token) {
      setIsLoggedIn(true);  // Set login status

      // Fetch user data from local storage or from a user endpoint
      const user = JSON.parse(localStorage.getItem('User')); // Assuming user is stored after login
      if (user) {
        setUsername(user.username);  // Set the username from localStorage
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('Token');  // Clear the token from local storage
    localStorage.removeItem('User');   // Clear the user data
    setIsLoggedIn(false);
    setUsername(null);                 // Clear the username
    navigate('/login');
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
            <Link to="/" className='nav-link m-2 text-black'>
              Home
            </Link>
            <Link to="/blog" className='nav-link m-2 text-black'>
              Blog
            </Link>
            <Link to="/gallery" className='nav-link m-2 text-black'>
              Gallery
            </Link>
            <Link to="/about" className='nav-link m-2 text-black'>
              About
            </Link>
            <Link to="/designers" className='nav-link m-2 text-black'>
              Designers
            </Link>
            {isLoggedIn ? (
              <>
                <span className='nav-link m-2'>
                  {username}  {/* Display the username */}
                </span>
                <span className='nav-link m-2 text-gray-800' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link to="/login" className='nav-link m-2 text-black'>
                  Login
                </Link>
                <Link to="/register" className='nav-link m-2 text-black'>
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
