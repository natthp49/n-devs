import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {routerPublic} from './router';



class App extends React.Component {
    render() {

        return (
            <Router>
                {routerPublic.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.page}
                    />
                ))
                }
            </Router>
        )

    }
}

export default App;