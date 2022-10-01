import React from "react";
import { Modal, Form, Button, Table } from "react-bootstrap";
import buktiTF from "../../assets/images/bukti.png";

const ModalView = ({ showView, setShowView }) => {
  return (
    <>
      <Modal show={showView} onHide={() => setShowView(false)}>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="number"
                placeholder="Nominal Donation"
                name="email"
                // onChange={handleChange}
                className="bg-light"
                autoFocus
              />
            </Form.Group>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Donate Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>                  
                  <td>Ekoy</td>
                  <td>Rp. 400.0000</td>
                  <td>30-09-2022</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-center">
          <Button style={{ width: "100%" }} variant="danger" onClick="#">
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalView;
