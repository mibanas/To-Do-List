import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/to-do-high-resolution-logo-transparent.png";
import { Button, Navbar } from "flowbite-react";

function Header() {
  return (
    <>
      <Navbar fluid rounded className="flex">
        <div>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Navbar.Brand>
        </div>
        <div className="flex md:order-2">
          <Link to={"/register"}>
            <Button>Register</Button>
          </Link>
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
}

export default Header;
