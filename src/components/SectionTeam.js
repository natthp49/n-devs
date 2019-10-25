import React from 'react';
import { Link } from 'react-router-dom';

class SectionTeam extends React.Component {
    render() {
        return (
            <div className="section team" id="section-team">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>


                    <div className="team-items">
                        {this.props.item.map((i) => (
                            <div className="team-col">
                                <div className="team-item content-box">
                                    <div className="image">
                                        <img src={i.image.img} alt="" />
                                    </div>
                                    <div className="desc">
                                        <div className="name">{i.name}</div>
                                        <div className="category">{i.category}</div>
                                        <div className="soc">
                                            {i.profile.map((p) => (
                                                <a target="_blank" href={p.url}>
                                                    <span className={`icon fab fa-${p.icon}`}></span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default SectionTeam;