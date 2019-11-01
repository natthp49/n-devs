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
                        <a target="_blank" href="https://www.facebook.com/n.psk26">
                            <span className="icon fab fa-facebook"></span>
                        </a>
                        <a target="_blank" href="https://github.com/n-psk">
                            <span className="icon fab fa-github"></span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/npsk26/">
                            <span className="icon fab fa-linkedin"></span>
                        </a>
                    </div>
                </div>
                <div className="clear"></div>
            </footer>
        )
    }
}

export default Footer;