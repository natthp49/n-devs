import React from 'react';
import started_image_p from '../images/started_image_p.jpg';

class Background extends React.Component {
    render() {
        return (
            <div className="video-bg" style={{backgroundImage: `url(${started_image_p}`}}>
					<div className="video-bg-mask"></div>
					<div className="video-bg-texture" id="grained_container"></div>
				</div>
        )
    }
}

export default Background;