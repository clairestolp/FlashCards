import React, { Component } from 'react';
import {connect} from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from './../components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import actions from './../redux/actions';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <Jumbotron>
        <h1>FlashCards</h1>
        <p>Beause data has more than two sides</p>
      </Jumbotron>
      <Row>
        <Col xl={{offset: 3, span: 6}} md={{offset: 3, span: 6}}>
          <Card title={"Login to get started"}>
            <p>Login to FlashCards</p>
            <ButtonGroup>
              <Button onClick={() => {this.props.updateUser({email: 'me@mail.com'})}} variant={'primary'}>Login</Button>
            </ButtonGroup>
          </Card>
        </Col>
      </Row>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (email) => dispatch(actions.updateUser(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
