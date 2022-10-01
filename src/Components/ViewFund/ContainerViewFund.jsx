import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListViewFund from "./ListViewFund";
import dataViewFund from "../DataDummy/DataDummyViewFund";

const ContainerViewFund = () => {
  return (
    <div>
      <Container className="my-5">
        <Row className="mb-5">
          {dataViewFund.map((item, index) => {
            return (
              <Col md={12} key={index}>
                <ListViewFund
                  name={item.name}
                  date={item.date}
                  total={item.total}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ContainerViewFund;
