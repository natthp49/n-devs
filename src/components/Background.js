import React from 'react';

class Background extends React.Component {
    render() {
        return (
            <div className="video-bg" style={{backgroundImage: `url(${this.props.img}`}}>
					<div className="video-bg-mask"></div>
					<div className="video-bg-texture" id="grained_container"></div>
				</div>
        )
    }
}

export default Background;