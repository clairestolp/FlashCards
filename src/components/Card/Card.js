import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function CardElement (props) {
  return (
    <Card>
      
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
        {props.children}
      </Card.Body>
      <Card.Body>
        <ButtonGroup>
        {props.buttons.map(button => (
          <Button variant={'primary'} href={button.href} onClick={button.onClick}>{button.text}</Button>
          )
        )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}
