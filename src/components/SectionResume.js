import React from 'react';

class SectionResume extends React.Component {
    render() {
        return (
            <div className="section resume" id="section-history">
                <div className="content">
                    <div className="cols">
                        {this.props.content.map((c) => (
                            <div className="col col-md">

                                <div className="title">
                                    <div className="title_inner">{c.title}</div>
                                </div>

                                <div className="resume-items">
                                    {c.item.map((i) => (
                                        <div className="resume-item content-box active">
                                            <div className="date">{i.date}</div>
                                            <div className="name">{i.name}</div>
                                            <div className="text">{i.text}</div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

export default SectionResume;