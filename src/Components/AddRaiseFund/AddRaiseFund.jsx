import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddRaiseFund = () => {
  return (
    <div style={{ margin: "5rem 10rem" }}>
      <div className="mb-5" style={{ fontSize: "30px" }}>
        Make Raise Fund
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="">
          <Form.Control className="bg-light" type="email" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFund">
          <Form.Label
            className=" bg-danger text-light fw-bold px-1 py-1"
            style={{
              borderRadius: "8px",
              border: "1px solid",
              cursor: "pointer",
            }}
          >
            {" "}
              Attache Thumbnail
          </Form.Label>
          <Form.Control
              type="file"
              name="thumbnail"
              className="bg-dark"
              hidden
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Control
            className="bg-light"
            type="number"
            placeholder="Goals Donation"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            className="bg-light"
            as="textarea"
            placeholder="Description"
            style={{ height: "200px", resize: "none" }}
          />
        </Form.Group>
        <div className="d-flex justify-content-end mt-5">
          <Button variant="danger" className="text-light fw-bold px-5" type="submit">
            Public Fundraising
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddRaiseFund;
