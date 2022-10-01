import React from "react";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ModalView from "../Modal/ModalView";

const ListViewFund = ({ name, date, total }) => {
  const [showView, setShowView] = useState(false)

  return (
    <div>
      <Card className="mb-3 bg-light">
        <Card.Body className="d-flex">
          <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>
              <p className="mt-3"> {date}</p>
            </Card.Text>
            <Card.Text>
              <div className="text-danger">Total: {total}</div>
            </Card.Text>
          </Card.Body>
          <Card.Body className="d-flex justify-content-end"  style={{alignItems:"center"}}>
            <Button onClick={() => setShowView(true)} style={{width:"110px", height:"35px", border:"none", borderRadius:"15px"}} className="bg-danger fw-bold"> View</Button>
            <ModalView showView={showView} setShowView={setShowView} />
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListViewFund;
