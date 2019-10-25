import React from 'react';

class SectionPricing extends React.Component {
    render() {
        return (
            <div className="section pricing" id="section-pricing">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>

                    <div className="pricing-items">

                        <div className="pricing-col">
                            <div className="pricing-item content-box">
                                <div className="icon">
                                    <span className="fas fa-star"></span>
                                </div>
                                <div className="name">{this.props.header}</div>
                                <div className="amount">
                                    <span className="number">
                                        <span className="dollar">$</span>
                                        <span>{this.props.dollar}</span>
                                        <span className="period">{this.props.period}</span>
                                    </span>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        {this.props.feature.map((work) => (
                                            <li>{work}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bts">
                                    <a href="#"className="btn hover-animated">
                                        <span className="circle"></span>
                                        <span className="lnk">Buy Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default SectionPricing;