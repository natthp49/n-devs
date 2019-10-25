import React from 'react';
import { Link } from 'react-router-dom';

const status = ['home', 'resume']

class StartedContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.page === "home"
                    ? <Home
                        text_about={this.props.text_about}
                        text_work={this.props.text_work}
                    />
                    : this.props.page === "resume"
                        ? <Resume header={this.props.header} path={this.props.path} />
                        : this.props.page === "works"}
            </React.Fragment>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="started-content">
                        <h1 className="h-title">
                            {this.props.text_about.intro} <strong>{this.props.text_about.name}</strong>{this.props.text_about.skill.map((skill) => (
                                <React.Fragment>
                                    {skill}<br />
                                </React.Fragment>
                            ))}
                        </h1>
                        <div className="h-subtitle typing-subtitle">
                            {this.props.text_work.map((w) => (
                                <p>{w.intro} <strong>{w.work}</strong></p>
                            ))}
                        </div>
                        <span className="typed-subtitle"></span>
                    </div>
                </div>
            </div>
        )
    }
}

class Resume extends React.Component {
    render() {
        return (
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="started-content">
                        <h1 class="h-title">{this.props.header}</h1>
                        <div class="h-subtitles">
                            <div class="h-subtitle typing-bread">
                                <p class="breadcrumbs">
                                    <Link to="/">{this.props.path[0]}</Link> / {this.props.path[1]}
                                </p>
                            </div>
                            <span class="typed-bread"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default StartedContent;