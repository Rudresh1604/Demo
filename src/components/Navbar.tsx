import { Button, Navbar } from "flowbite-react";
import React, { useState } from "react";
import GettingStartedDrawer from "./SideDrawer";

const NavbarComponent = () => {
  return (
    <div className="nav-pos mx-4 border">
      <Navbar
        fluid
        rounded
        className="text-white"
        style={{ background: "none" }}
      >
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="mr-3 h-6 sm:h-9">Logo</span>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            kknknnnnn
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active className="text-white">
            Home
          </Navbar.Link>
          <Navbar.Link>
            <GettingStartedDrawer />
          </Navbar.Link>
          <Navbar.Link className="bg-none text-white hover:text-black" href="#">
            Services
          </Navbar.Link>
          <Navbar.Link className="bg-none text-white hover:text-black" href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link className="bg-none text-white hover:text-black" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
