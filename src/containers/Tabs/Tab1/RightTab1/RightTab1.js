import React, {Component} from 'react';
import './RighTab1.css';

class RightTab1 extends Component {
    render() {
        return (
            <div>
                <p><b>Контакты:</b></p>
                <p>Махмутов Владимир Александрович</p>
                <p><i>Frontend разработчик</i></p>
                <p><a href="tel: +74951234567">+7 (495) 123-45-67</a></p>
                <p><a href="mailto: example@mail.ru">example@mail.ru</a></p>
                <p><a href="skype: someskype?call">someskype</a></p>
            </div>
        )
    }

}

export default RightTab1;
