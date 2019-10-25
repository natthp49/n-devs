import React from 'react';

class SectionStarted extends React.Component {
    render() {
        return (
            <div className="section started" id="section-started">
                {this.props.children}
            </div>
        )
    }
}

export default SectionStarted;