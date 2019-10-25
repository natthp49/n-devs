import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo hover-masks-logo">
                <a href="#">
                    <span className="mask-lnk">Nutthapat <strong>Piasangka</strong></span>
                    <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
                </a>
            </div>
        )
    }
}

export default Logo;