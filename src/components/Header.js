import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="head-top">
                    {this.props.children}
                </div>
            </header>
        )
    }
}

export default Header;