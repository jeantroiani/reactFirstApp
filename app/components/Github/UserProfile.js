var React = require('react');


var UserProfile =  React.createClass({
    propTypes:{
            username: React.PropTypes.string.isRequired,
            bio: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div>
                <h3>User Profile</h3>
                <ul>
                    {this.props.bio.avatar_url && <li><img src={this.props.bio.avatar_url} /></li>}
                USER NAME: {this.props.username} <br />
                BIO: {this.props.bio}
                </ul>
            </div>
        )
    }
})

module.exports = UserProfile
