var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var UserProfile = require('./Github/UserProfile');

var Profile = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {
            notes: ['hello','how are you?','Hi!'],
            bio: {bio: 'This is my story'},
            repos: ['repo_a', 'El_repositorio', 'repo_1981']
        }
    },
    render: function () {
        var username = this.getParams().username    //username because that is what we have in the params
        return (
            <div className = "row-md-4">
                <div className= "">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className= "row-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className= "row-md-4">
                    <Notes username={username} notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;
