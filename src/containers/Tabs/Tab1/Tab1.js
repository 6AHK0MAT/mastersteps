import React, {Component} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import './Tab1.css';
import LeftTab1 from "./LeftTab1/LeftTab1";
import RightTab1 from "./RightTab1/RightTab1";

class Tab1 extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col col="sm-9">
                        <LeftTab1/>
                    </Col>
                    <Col col="sm">
                        <RightTab1/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Tab1;
