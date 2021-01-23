import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

export default class Header extends Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
