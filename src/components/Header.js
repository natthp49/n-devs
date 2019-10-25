import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="head-top">
                        {this.props.children}
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;