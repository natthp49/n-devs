import React from 'react';
import { Link } from 'react-router-dom';


class TopMenu extends React.Component {
    render() {
        return (
            <div className="top-menu hover-masks">
                <div className="top-menu-nav">
                    <div className="menu-topmenu-container">
                        <ul className="menu">
                            <li className="menu-item menu-item-has-children current-menu-item">
                                <Link to="/">Home</Link>
                                {/* <ul className="sub-menu">
                                    <li className="menu-item current-menu-item"><Link to="/">Home Default</Link></li>
                                    <li className="menu-item"><Link to="/index_creative">Home Creative</Link></li>
                                    <li className="menu-item"><Link to="/index_slider">Home Slider</Link></li>
                                    <li className="menu-item"><Link to="/index_personal">Home Personal</Link></li>
                                    <li className="menu-item"><Link to="/index_onepage" target="blank">Home OnePage</Link></li>
                                    <li className="menu-item"><Link to="/index_image">Home Image</Link></li>
                                    <li className="menu-item"><Link to="/index_video">Home Video</Link></li>
                                </ul> */}
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/resume">Resume</Link>
                                {/* <ul className="sub-menu">
                                    <li className="menu-item"><Link to="/resume">Resume Default</Link></li>
                                    <li className="menu-item"><Link to="/resume_image">Resume Image</Link></li>
                                    <li className="menu-item"><Link to="/resume_creative">Resume Creative</Link></li>
                                </ul> */}
                            </li>
                            {/* <li className="menu-item menu-item-has-children">
                                <Link to="/works">Works</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item"><Link to="/works">Works Default</Link></li>
                                    <li className="menu-item"><Link to="/works_creative">Works Creative</Link></li>
                                    <li className="menu-item"><Link to="/work_single">Work Single</Link></li>
                                    <li className="menu-item"><Link to="/work_single_image">Work Single Image</Link></li>
                                    <li className="menu-item"><Link to="/work_single_creative">Work Single Creative</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/contacts">Contact</Link>
                                <ul className="sub-menu">
                                    <li className="menu-item"><Link to="/contacts">Contact Default</Link></li>
                                    <li className="menu-item"><Link to="/contacts_map">Contact Map</Link></li>
                                    <li className="menu-item"><Link to="/contacts_image">Contact Image</Link></li>
                                    <li className="menu-item"><Link to="/contacts_creative">Contact Creative</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopMenu;