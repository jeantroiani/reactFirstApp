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
                    {this.props.bio.avatar_url && <li><img src={this.props.bio.avatar_url} className="avatar" /></li>}
                    {this.props.bio.name && <li >Name: {this.props.bio.name}</li>}
                    {this.props.bio.login && <li >Username: {this.props.bio.login}</li>}
                    {this.props.bio.email && <li >Email: {this.props.bio.email}</li>}
                    {this.props.bio.location && <li >Location: {this.props.bio.location}</li>}
                    {this.props.bio.company && <li >Company: {this.props.bio.company}</li>}
                    {this.props.bio.followers && <li >Followers: {this.props.bio.followers}</li>}
                    {this.props.bio.following && <li >Following: {this.props.bio.following}</li>}
                    {this.props.bio.following && <li >Public Repos: {this.props.bio.public_repos}</li>}
                    {this.props.bio.blog && <li >Blog: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></li>}
                </ul>
            </div>
        )
    }
})

module.exports = UserProfile
