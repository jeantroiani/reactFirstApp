var React = require('react');


var UserProfile =  React.createClass({
    render: function () {
        return (
            <div>
                User Profile<br />
                USER NAME: {this.props.username} <br />
                BIO: {this.props.bio}
            </div>
        )
    }
})

module.exports = UserProfile
