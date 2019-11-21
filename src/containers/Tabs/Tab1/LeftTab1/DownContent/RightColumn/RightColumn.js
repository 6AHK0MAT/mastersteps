import React, {Component} from 'react';
import './RightColumn.css';

class RightColumn extends Component {
    render() {
        return (
            <div  style={{textAlign: 'left'}}>
                <p><b>ПОЛЕЗНЫЕ ССЫЛКИ:</b></p>
                <ol>
                    <li><a href="http://www.google.com" target='_blank'>Мануалы</a></li>
                    <li><a href="http://www.google.com" target='_blank'>График вебинаров</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Вебинары в записи</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Как записаться на обучение</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Кретерии оценки для перехода</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Материалы по наставничеству</a></li>
                    <li><a href="http://www.google.com" target='_blank'>Руководство супервайзера</a></li>
                </ol>
            </div>

        )
    }

}

export default RightColumn;
