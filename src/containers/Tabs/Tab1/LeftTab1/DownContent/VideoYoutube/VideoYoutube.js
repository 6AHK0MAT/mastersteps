import React, {Component} from 'react';
import './VideoYoutube.css';

class VideoYoutube extends Component {
    render() {
        return (
            <div  style={{textAlign: 'center'}}>
                <iframe title={'VideoSM'} width="700" height="394" src="https://www.youtube.com/embed/h49L3HqBFXs" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>

        )
    }

}

export default VideoYoutube;
