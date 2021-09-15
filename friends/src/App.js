import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Friends from './components/Friends';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              {this.props.isLogin && <Link to="/friends">Friends</Link>}
            </li>
            <li>
              {this.props.isLogin ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
            </li>
          </ul>
          <Switch>
            <ProtectedRoute path="/friends" component={Friends} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>

    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isLogin: state.loginReducer.isLogin
  })
};

export default connect(mapStateToProps)(App);
