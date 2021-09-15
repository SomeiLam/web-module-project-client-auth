import React from "react";
import { connect } from 'react-redux';
import axiosWithAuth from "../utils/axiosWithAuth";
import { logout } from '../actions';

class Logout extends React.Component {
    componentDidMount() {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
              localStorage.removeItem("token");
              this.props.logout();
              this.props.history.push('/login');
            }).catch(err=> {
                console.log(err);
            });
    };

    render() {
        return(<div></div>);
    }
}

export default connect(null, { logout } )(Logout);