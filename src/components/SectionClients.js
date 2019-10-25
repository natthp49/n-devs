import React from 'react';
import { Link } from 'react-router-dom';

class SectionClients extends React.Component {
    render() {
        return (
            <div className="section clients" id="section-clients">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>


                    <div className="content-box">
                        <div className="clients-items">
                            {this.props.item.map((i) => (
                                <div class="clients-col">
                                    <div class="clients-item">
                                        <a target="_blank" href="#">
                                            <img src={i.image.img} alt="" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default SectionClients;