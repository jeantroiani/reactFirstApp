var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var UserProfile = require('./Github/UserProfile');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: ['hello','how are you?','Hi!'],
            bio: {bio: 'This is my story'},
            repos: ['repo_a', 'El_repositorio', 'repo_1981']
        }
    },
    componentDidMount: function () {
        this.ref = new Firebase('https://incandescent-inferno-6987.firebaseio.com/');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
    },
    // componentWillUnmount: function () {
    //     this.unbind('notes');
    // },
    render: function () {
        var username = this.getParams().username    //username because that is what we have in the params
        return (
            <div className = "">
                <div className= "row-md-4">
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
