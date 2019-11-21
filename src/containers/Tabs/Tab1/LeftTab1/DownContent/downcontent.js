import React, {Component} from 'react';
import './downcontent.css';
import VideoYoutube from './VideoYoutube/VideoYoutube';
import RightColumn from './RightColumn/RightColumn';


class DownContent extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>

                <div className="row">
                    <div className="col-sm alignContent">
                        <VideoYoutube/>
                    </div>
                    <div className="col-sm alignContent">
                        <RightColumn />
                    </div>
                </div>
            </div>

        )
    }

}

export default DownContent;
