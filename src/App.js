import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Main from './Main';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Playlists from './Components/pages/playlists';
import Party from './Components/pages/party';
import Player from './Components/pages/player';
import Dashboard from './Components/pages/dashboard';
import { getQueryParams } from './utils';




// includes
import './Assets/css/default.min.css';

class App extends Component {
  constructor(){
    super();
    const params = getQueryParams();
    this.state = { token: params.token }
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <Router>
        <div className="App">


          {this.isLoggedIn ? <Header token={this.state.token}/> : <Header />}

          <Route exact path='/ListenClient' component={Main} />
          <Route exact path='/Playlists' component={Playlists} />
          <Route exact path='/Party' component={Party} />
          <Route exact path='/Player' component={Player} />
          <Route exact path='/Dashboard' component={Dashboard} />

        </div>
      </Router>
    );
  }
}

export default App;
