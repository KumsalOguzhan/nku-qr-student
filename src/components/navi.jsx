import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
} from "reactstrap";

const Navi = () => {
  return (
    <Navbar className="mb-3 rounded" color="primary" expand="md" dark>
      <NavbarBrand href="/">QR Yoklama Sistemi</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar></Nav>
        <NavLink href="/sign-in" className="text-light">Çıkış Yap</NavLink>
      </Collapse>
    </Navbar>
  );
};

export default Navi;
