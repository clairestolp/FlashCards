import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './../components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class Home extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>FlashCards</h1>
        <p>Beause data has more than two sides</p>
      </Jumbotron>
      <Row>
        <Col xl={{offset: 3, span: 6}} md={{offset: 3, span: 6}}>
          <Card title={"Login to get started"} buttons={[{text: "Login", href: '/login'}]}>
            <p>Login to FlashCards</p>
          </Card>
        </Col>
      </Row>
      
      </div>
    )
  }
}
