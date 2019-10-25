import React from 'react';

class SectionStarted extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="section started" id="section-started">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default SectionStarted;