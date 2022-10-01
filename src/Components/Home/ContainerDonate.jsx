import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ListDonate from './ListDonate';
import dataDonate from "../DataDummy/DummyData"

const ContainerDonate = () => {
    return (
        <div>
            <Container className="my-5">
                <h3 className="text-danger text-center fw-bold" style={{marginTop:"300px"}}>Donate Now</h3>
                <Row>
                {dataDonate.map((item, index) => {
                    return(
                    <Col md={4} key={index}>
                        <ListDonate 
                            dummyImg={item.dummyImg}
                            title={item.title}
                            desc={item.desc}
                            fund={item.fund}
                        />
                    </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    );
};

export default ContainerDonate;