import React, {Component} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import './Tab2.css';
import LeftTab2 from "./LeftTab2/LeftTab2";
import RightTab2 from "./RightTab2/RightTab2";

class Tab2 extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col col="sm-8">
                        <LeftTab2/>
                    </Col>
                    <Col col="sm-4">
                        <RightTab2/>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Tab2;
