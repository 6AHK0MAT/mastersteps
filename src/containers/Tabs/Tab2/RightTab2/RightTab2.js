import React, {Component} from 'react';
import './RighTab2.css';
import InputGroupComponent from "../../../../сomponents/InputGroup/InputGroup";
import QuestionAnswers from "../../../../сomponents/QuestionAnswers/QuestionAnswers";

class RightTab2 extends Component {
    render() {
        return (
            <div>
                <p><b>Задать вопрос:</b></p>
                <p>Ваш вопрос будет задан на портале анонимно:</p>
                <InputGroupComponent/>
                <hr/>
                <QuestionAnswers/>
            </div>

        )
    }

}

export default RightTab2;
