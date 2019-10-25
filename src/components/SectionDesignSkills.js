import React from 'react';

class SectionDesignSkills extends React.Component {
    render() {
        return (
            <div className="section skills" id="section-skills">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>

                    <div className="skills percent content-box">
                        <ul>
                            {this.props.item.map((i) => (
                                <li>
                                    <div className="name">{i.name}</div>
                                    <div className="progress ">
                                        <div className="percentage" style={{width: `${i.progress}%`}}>
                                            <span className="percent">{i.progress+"%"}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default SectionDesignSkills;