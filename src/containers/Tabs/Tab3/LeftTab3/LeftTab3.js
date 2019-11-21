import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBigCalendar from '../../../../сomponents/ReactBigCalendar/ReactBigCalendar'
import SendFile from '../../../../сomponents/SendFile/SendFile';
import './LeftTab3.css';

class LeftTab3 extends Component {
    render() {
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>Календарь руководителя</h2>
                <ReactBigCalendar/>
                <hr/>
                <SendFile/>
            </div>


        )
    }

}

export default LeftTab3;
