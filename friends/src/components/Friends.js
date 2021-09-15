import React from 'react';
import { connect } from 'react-redux';
import { getFriends, fetchFail } from '../actions';
import FriendForm from './FriendForm';

class Friends extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        if (this.props.error) {
            return <h2>We got an error: {this.props.error}</h2>;
        }

        if (this.props.isFetching) {
            return <h2>Fetching friends for ya!</h2>;
        }
        return (
            <div>
                <FriendForm />
                <div className="friends-list">
                    {this.props.friends && this.props.friends.map(friend => (
                        <div key={friend.id} className="friend-item">
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        isFetching: state.friendsReducer.isFetching,
        error: state.friendsReducer.error
    }
}

export default connect(mapStateToProps, { getFriends, fetchFail })(Friends);