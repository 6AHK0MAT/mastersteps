import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div>
                <div className={'FotoSteps'}>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                </div>
                <div>
                    <div className={'text1TabRight'}>
                        <p><b>Иванов Иван Иванович</b></p>
                        <div className={'lHeit'}>
                            <p><b>HR BP, менеджер проекта</b></p>
                            <p>доб. 1234</p>
                            <p><a href="mailto: example@mail.ru">example@mail.ru</a></p>
                            <p style={{marginLeft: '55px', marginTop: '-5px'}}>
                                <ul type={'disc'} style={{lineHeight: '0.96', marginLeft: '5px'}}>
                                    <li>Общие вопросы</li>
                                    <li>Штатное расписание</li>
                                    <li>Переводы сотрудников</li>
                                    <li>Вопросы по расчетоам бонуса</li>
                                    <li><a href="http://www.google.com" target='_blank'>Подразделения в зоне отвественности</a></li>
                                </ul>
                            </p>

                        </div>

                    </div>
                </div>


            </div>
        )
    }

}

export default Contacts;
