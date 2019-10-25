import React from 'react';
import {Link} from 'react-router-dom';

class MosueButton extends React.Component {
    render() {
        return (
            <Link to="#" className="mouse_btn" style={{display: "none"}}>
                <span className="icon fas fa-chevron-down"></span>
            </Link>
        )
    }
}

export default MosueButton;