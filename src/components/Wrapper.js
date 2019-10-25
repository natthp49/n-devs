import React from 'react';

class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Wrapper;