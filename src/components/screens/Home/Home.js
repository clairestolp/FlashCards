import React, { useEffect } from "react";
import { connect } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import actions from "../../../redux/actions";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const handleLogin = () => {
    props.login("me@mail.com");
  };

  return (
    <div>
      <Jumbotron>
        <h1>FlashCards</h1>
        <p>Beause data has more than two sides</p>
      </Jumbotron>
      <Row>
        <Col xl={{ offset: 3, span: 6 }} md={{ offset: 3, span: 6 }}>
          <Card title={"Login to get started"}>
            {!props.user.id ? (
              <Card.Body>
                <Card.Title>Login to get started</Card.Title>
                <p>Login to FlashCards</p>
                <ButtonGroup>
                  <Button onClick={handleLogin} variant={"primary"}>
                    Login
                  </Button>
                </ButtonGroup>
              </Card.Body>
            ) : (
              <Card.Body>
                <Card.Title>Welcome {props.user.name.firstname}</Card.Title>
                <p>Go to your subjects to get started</p>
                <ButtonGroup>
                  <Link to="/app/subjects">
                    <Button>Go to Subjects</Button>
                  </Link>
                </ButtonGroup>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (email) => dispatch(actions.updateUser(email)),
  login: (email) => dispatch(actions.login(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
