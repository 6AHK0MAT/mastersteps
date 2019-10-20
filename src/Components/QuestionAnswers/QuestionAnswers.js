import React, {Component} from 'react';
import { Accordion, Card, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class QuestionAnswers extends Component {
    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Что такое ступени мастерства?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Сейчас я вам все расскажу. Присаживайтесь поудобнее и готовьтесь записывать!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Быть или не быть?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>БЫТЬ!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Стакан наполовину полный?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Да.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Как заработать миллион?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Работать, работать, работать, работать, работать, работать, работать, работать, работать...</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            Кто на свете самый сильный?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>СЛОН! :)</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        )
    }

}

export default QuestionAnswers;


