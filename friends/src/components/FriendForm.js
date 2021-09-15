import React from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from "../utils/axiosWithAuth";
import { updateNewFriend } from '../actions'

class FriendForm extends React.Component {
    state = {
        newFriend: {
            name: "",
            age: "",
            email: ""
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state.newFriend)
            .then(res => {
                console.log("after post add friend", res)
                this.props.updateNewFriend(res.data);
                this.setState({
                    newFriend: {
                        name: "",
                        age: "",
                        email: ""
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    // componentWillUnmount() {
    //     this.setState({
    //         newFriend: {
    //             name: "",
    //             age: "",
    //             email: ""
    //         }
    //     })
    // }

    render() {
        return (
            <div className="add-friend-form">
                <form onSubmit={this.addFriend}>
                    <label htmlFor="name">
                        Name:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.newFriend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="age">
                        Age:
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={this.state.newFriend.age}
                            min="0"
                            max="100"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.newFriend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add a Friend</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateNewFriend })(FriendForm);