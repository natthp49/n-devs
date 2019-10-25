import React from 'react';
// import '../css/min-styles.css'

class SectionCodingSkills extends React.Component {
    render() {
        return (
            <div className="section skills" id="section-skills-code">
                <div className="content">

                    <div className="title">
                        <div className="title_inner">{this.props.title}</div>
                    </div>

                    <div className="skills circles content-box">
                        <ul>
                            {this.props.item.map((i) => (
                                <li>
                                    <div className="name">{i.name}</div>
                                    <div className={`progress p${i.progress}`}>
                                        <div className="percentage">
                                            <span className="percent">{i.progress+"%"}</span>
                                        </div>
                                        <span>{i.progress+"%"}</span>
                                        <div className="slice"><div className="bar"></div><div className="fill"></div></div>
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

export default SectionCodingSkills;