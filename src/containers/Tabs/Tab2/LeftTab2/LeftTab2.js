import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionCopmonent from "../../../../сomponents/Accordion/Accordion";

import './LeftTab2.css';

class LeftTab2 extends Component {
    render() {
        return (
            <div>
                <h2>Как перейти на новую ступень</h2>
                <ol>
                    <li><a href="http://www.google.com" target='_blank'>Какие функциональные обязанности включает в себя каждая ступень?</a></li>
                    <li><a href="http://www.google.com" target='_blank'>По каким критериям оцениваются профессиональные компетенции сотрудника?</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Какими поведенческими компетенциаями должен обладать сотрудник для перехода?</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Какие учебные программы необходимо пройти в рамках каждой ступени?</a></li>
                </ol>
                <br/>
                <div>
                    <div>
                        <Button href="http://www.google.com" target='_blank' variant="default" className={'ColorLink'} size="lg" block >
                            КРИТЕРИИ ПЕРЕХОДА НА НОВУЮ СТУПЕНЬ
                        </Button>
                    </div>
                </div>
                <hr/>
                <p><h2>FAQ</h2></p>
                <AccordionCopmonent />

            </div>


        )
    }

}

export default LeftTab2;
