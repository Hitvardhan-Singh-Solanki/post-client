import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { withRouter } from 'react-router-dom';

const NavbarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px;
`;

const NavListElement = styled.li`
  margin-left: 20px;
  cursor: pointer;
  :hover {
    color: orangered;
  }
`;

const Navbar = ({ isAuthenticated, setIsAuthenticated, history }) => {
  const sendReqToProtect = () => {
    Axios.get('http://localhost:8080/api/protected/test', {
      withCredentials: true
    }).then(res => {
      console.log('--->', res);
    });
  };

  const handleLogout = () => {
    Axios.get('http://localhost:8080/api/auth/logout', {
      withCredentials: true
    }).then(res => {
      setIsAuthenticated(false);
      history.push('/login');
    });
  };

  return (
    <NavbarContainer>
      <NavList>
        {!isAuthenticated ? (
          <>
            <NavListElement>
              <Link to="/login">Login</Link>
            </NavListElement>
            <NavListElement>
              <Link to="/sign-up">Sign up</Link>
            </NavListElement>
          </>
        ) : (
          <NavListElement onClick={handleLogout}>Logout</NavListElement>
        )}
        <NavListElement onClick={sendReqToProtect}>Doc</NavListElement>
      </NavList>
      <div>{isAuthenticated}</div>
    </NavbarContainer>
  );
};

export default withRouter(Navbar);
