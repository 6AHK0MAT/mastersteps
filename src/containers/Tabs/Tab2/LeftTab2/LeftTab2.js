import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionCopmonent from "../../../../Components/Accordion/Accordion";

import './LeftTab2.css';

class LeftTab2 extends Component {
    render() {
        return (
            <div>
                <h2>Как перейти на новую ступень</h2>
                <h3>Перейдите по ссылке и узнайте, что необхходимо, чтобы перейти на следующую ступень мастерства.</h3>
                <br/>
                <div>
                    <div>
                        <Button href="http://www.google.com" target='_blank' variant="primary" size="lg" block>
                            ПЕРЕХОД НА НОВУЮ СТУПЕНЬ МАСТЕРСТВА
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
