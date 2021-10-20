import React from "react";
import './cardRM.css';
import {Card , Button} from "react-bootstrap"

export default function CardRM(props) {
  const {img, name, gender, status } = props;
  return (
    <Card className="card card-img-top" style={{ width: "13rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b>Gender: </b>{gender}
          <br/>
          <b>Status: </b>{status} 
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}
