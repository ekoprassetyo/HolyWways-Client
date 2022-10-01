import React from "react";
import { Card } from "react-bootstrap";

const ListDonate = ({ name, date, total }) => {
  return (
    <div>
      <Card className="mb-3 bg-light">
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>
            <p className="mt-3"> {date}</p>
          </Card.Text>
          <Card.Text>
            <div className="text-danger">Total: {total}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListDonate;
