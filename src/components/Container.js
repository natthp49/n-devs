import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Container;