import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copy">
                    <p>E: nutthapat.psk@gmail.com</p>
                    <p>T: (+66) 80 314 7507</p>
                </div>
                <div className="soc-box">
                    <div className="follow-label">Follow Me</div>
                    <div className="soc">
                        <a target="_blank" href="https://www.pinterest.com/">
                            <span className="icon fab fa-pinterest"></span>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/">
                            <span className="icon fab fa-instagram"></span>
                        </a>
                        <a target="_blank" href="https://dribbble.com/">
                            <span className="icon fab fa-dribbble"></span>
                        </a>
                    </div>
                </div>
                <div className="clear"></div>
            </footer>
        )
    }
}

export default Footer;