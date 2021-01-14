import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login"
import { useDispatch, useSelector } from "react-redux";
import { Button, Navbar, Nav, Form,FormControl } from 'react-bootstrap';
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/navbar.css";

const NavbarsTemp = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    < div>
  <Navbar  className="navbar" collapseOnSelect  bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand >News App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    {isSignedIn && (
      <Form inline>
      <FormControl type="text" placeholder="Search" value={inputValue} className="mr-sm-2" onChange={(e) => setInputValue(e.target.value)}/>
      <Button variant="outline-info" onClick={handleClick}>Search</Button>
    </Form>
    )}
    {isSignedIn ?(
      <Nav className="mr-auto">
      <Nav.Link ><Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          /></Nav.Link>
      <Nav.Link ><h1 className="signedIn">{userData?.givenName}</h1></Nav.Link>
      <Nav.Link ><GoogleLogout
            clientId="241399905399-ci01tqno2lesh6ko5cjutc91q6e9tg4u.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout 
              </button >
            )}
            onLogoutSuccess={logout}
          /></Nav.Link>
    </Nav>
    ): (
      <h1 className="notSignedIn">User not available</h1>
    )}
    </Navbar.Collapse>
    
    
    
    
  </Navbar>
 
</div> );
};

export default NavbarsTemp;




{/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">News App</Navbar.Brand>
    {isSignedIn && (
      <Form inline>
      <FormControl type="text" placeholder="Search" value={inputValue} className="mr-sm-2" onChange={(e) => setInputValue(e.target.value)}/>
      <Button variant="outline-info" onClick={handleClick}>Search</Button>
    </Form>
    )}
    {isSignedIn ?(
      <Nav className="mr-auto">
      <Nav.Link href="#home"><Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          /></Nav.Link>
      <Nav.Link href="#home"><h1 className="signedIn">{userData?.givenName}</h1></Nav.Link>
      <Nav.Link href="#home"><GoogleLogout
            clientId="241399905399-ci01tqno2lesh6ko5cjutc91q6e9tg4u.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout 
              </button >
            )}
            onLogoutSuccess={logout}
          /></Nav.Link>
    </Nav>
    ): (
      <h1 className="notSignedIn">User not available</h1>
    )}
    
    
  </Navbar> */}