import React from 'react';

class SectionInterests extends React.Component {
    render() {
        return (
            <div className="section service" id="section-services">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>


                    <div className="service-items">
                        {this.props.item.map((i) => (
                            <div className="service-col">
                                <div className="service-item content-box">
                                    <div className="icon"><span className={`fas fa-${i.icon}`}></span></div>
                                    <div className="name">{i.name}</div>
                                    <div className="text">{i.text}</div>
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

export default SectionInterests;