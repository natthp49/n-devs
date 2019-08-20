import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Hay, I'm Nutthapat Piasangka"
    }
  }
  render() {
    const { title } = this.state
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" render={() => (
            <React.Fragment>
              <center>
                <h1>{title}</h1>
              </center>
            </React.Fragment>
          )} />
        </Router>
      </React.Fragment>
    )
  }
}

