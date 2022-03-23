import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AmiiboDetail from "../amiibo/AmiiboDetail";
import Contact from "../routes/Contact";
import Home from "../routes/Home";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  background-color: black;
  height: 50px;
  line-height: 2;
`;

const StyledLink = styled(Nav.Link)`
  color: white;

  &:hover {
    color: #49eac6;
  }
`;

function Navigation() {
  return (
    <Router>
      <StyledNav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <StyledLink href="/">Home</StyledLink>
        </Nav.Item>
        <Nav.Item>
          <StyledLink href="/contact">Contact</StyledLink>
        </Nav.Item>
      </StyledNav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/amiibo/:character" element={<AmiiboDetail />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
