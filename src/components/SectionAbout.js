import React from 'react';

class SectionAbout extends React.Component {
    render() {
        return (
            <div className="section about" id="section-about">
                <div className="content content-box">

                    <div className="image">
                        <img src={this.props.about.image.img} alt="" />
                    </div>

                    <div className="desc">
                        <p>{this.props.about.message}</p>
                        <div className="info-list">
                            <ul>
                                <li><strong>Age:</strong> {this.props.about.age}</li>
                                <li><strong>Residence:</strong> {this.props.about.residence}</li>
                                <li><strong>Freelance:</strong> {this.props.about.freelance}</li>
                                <li><strong>Address:</strong> {this.props.about.address}</li>
                                <li><strong>Phone:</strong> {this.props.about.phone}</li>
                                <li><strong>E-mail:</strong> {this.props.about.email}</li>
                            </ul>
                        </div>
                        <div className="bts">
                            <a href="#"className="btn hover-animated">
                                <span className="circle"></span>
                                <span className="lnk">Download CV</span>
                            </a>
                        </div>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default SectionAbout;