import React, {Component} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import './Tab3.css';
import LeftTab3 from "./LeftTab3/LeftTab3";
import RightTab3 from "./RightTab3/RightTab3";

class Tab3 extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col col="sm-8">
                        <LeftTab3/>
                    </Col>
                    <Col col="sm-4">
                        <RightTab3/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Tab3;
