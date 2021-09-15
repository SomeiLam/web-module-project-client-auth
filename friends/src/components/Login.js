import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log('login props: ', this.props);
    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(resp => {
        console.log(resp);
        localStorage.setItem("token", resp.data.payload);
        this.props.login()
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login } )(Login);