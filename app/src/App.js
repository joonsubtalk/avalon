import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProgressMarker from './lib/ProgressMarker';
import Menu from './container/Menu/Menu';
import About from './container/About/About';

class App extends Component {

  render() {
    return (
        <div className="app">
            <Router>
                <Route path="/" exact component={Menu} />
                <Route path="/about" exact component={About} />
                {/* <Route path="/" exact component={Highscore} /> */}
            </Router>
        </div>
    );
  }
}

export default App;
