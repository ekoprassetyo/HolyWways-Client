import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ListRaiseFund from './ListRaiseFund';
import dataRaiseFund from '../DataDummy/DummyDataRaiseFund';

const ContainerRaiseFund = () => {
    return (
        <div>
             <Container className="my-5">
                <Row className="mb-5">
                {dataRaiseFund.map((item, index) => {
                    return(
                    <Col md={4} key={index}>
                        <ListRaiseFund 
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

export default ContainerRaiseFund;