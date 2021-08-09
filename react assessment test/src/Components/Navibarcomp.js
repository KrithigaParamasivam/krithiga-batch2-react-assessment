
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';


export default function Navibarcomp() {
 
  return (
    <div>
      <Navbar bg="danger" variant="dark">
       
        

        <Navbar.Brand href="#home"></Navbar.Brand>
        <ul class="nav navbar-nav navbar-right"></ul>
        <Nav className="mr-auto">
         {/* <Nav className="me-auto"> */}
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Nav.Link href="/account">Signup</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}


          
          <Nav.Link href="/logout">Logout</Nav.Link>




        </Nav>
      </Navbar>

    </div>
  )
}