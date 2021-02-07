import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Header(props) {
  console.log(props.user);
  return (
    <Navbar bg={"primary"}>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className={"ml-auto"}>
        {!props.user?.id ? (
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        ) : (
          <Nav.Item className={"navbar-text"}>
            <p className={"mb-0"}>Hello, {props.user?.name?.firstname}</p>
          </Nav.Item>
        )}
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  user: PropTypes.object,
};
