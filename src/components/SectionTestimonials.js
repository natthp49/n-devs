import React from 'react';
import { Link } from 'react-router-dom';

class SectionTestimonials extends React.Component {
    render() {
        return (
            <div className="section testimonials" id="section-testimonials">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>



                    <div className="reviews-carousel">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.props.item.map((i) => (
                                    <div className="swiper-slide">
                                        <div className="reviews-item content-box">
                                            <div className="image">
                                                <img src={i.image.img} alt="" />
                                            </div>
                                            <div className="info">
                                                <div className="name">{i.name}</div>
                                                <div className="company">{i.company}</div>
                                            </div>
                                            <div className="text">
                                                {i.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="swiper-nav">
                        <a className="prev swiper-button-prev fas fa-long-arrow-alt-left"></a>
                        <a className="next swiper-button-next fas fa-long-arrow-alt-right"></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTestimonials;