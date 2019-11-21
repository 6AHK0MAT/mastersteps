import React, {Component} from 'react';
import Contacts from './Contacts/Сontacts';
import './RighTab1.css';

class RightTab1 extends Component {
    render() {
        return (
            <div>
                <p><b>Контакты:</b></p>
                <p>Общий ящик <a href="mailto: StepsToSucsees@sibur.ru">StepsToSucsees@sibur.ru</a></p>
                <div className={'FZ'}>
                    <div className={'Square'}></div>
                    <div><span className={'testText'}>А что на этот вопрос ответил ваш руководитель?</span></div>
                </div>
                <br/><br/><br/><br/>
                <Contacts/>
                <Contacts/>
                <Contacts/>
                <Contacts/>
            </div>
        )
    }

}

export default RightTab1;
