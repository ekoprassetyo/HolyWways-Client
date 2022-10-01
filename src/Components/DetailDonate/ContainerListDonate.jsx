import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ListDonate from './ListDonate';
import dataListDonate from "../DataDummy/DataDummyListDonate"

const ContainerListDonate = () => {
    return (
        <div>
            <Container className="my-5">
                <Row className="mb-5">
                {dataListDonate.map((item, index) => {
                    return(
                    <Col md={12} key={index}>
                        <ListDonate 
                            name={item.name}
                            date={item.date}
                            total={item.total}
                        />
                    </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    );
};

export default ContainerListDonate;