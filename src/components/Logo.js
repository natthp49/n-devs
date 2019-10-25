import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo hover-masks-logo">
                    <a href="#">
                        <span className="mask-lnk">Nutthapat <strong>Piasangka</strong></span>
                        <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Logo;