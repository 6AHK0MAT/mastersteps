import React, {Component} from 'react';
import TopContent from './TopContent/topcontent';
import DownContent from './DownContent/downcontent';
import './LeftTab1.css';

class LeftTab1 extends Component {
    render() {
        return (
            <div  style={{textAlign: 'center'}}>
                <TopContent />
                <br/>
                <DownContent />
            </div>

        )
    }

}

export default LeftTab1;
