import React from 'react';
import started_image_p from '../images/started_image_p.jpg';

class StartedContent extends React.Component {
    render() {
        return (
            <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="started-content">
                        <h1 className="h-title">
                            Hello, I’m <strong>Nutthapat Piasangka</strong>, Front-end Developer and <br />
                            Back-end Developer Based in San Francisco.
							</h1>
                        <div className="h-subtitle typing-subtitle">
                            <p>I code cool <strong>websites</strong></p>
                            <p>I develop <strong>mobile apps</strong></p>
                            <p>I love <strong>react.js</strong></p>
                        </div>
                        <span className="typed-subtitle"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartedContent;