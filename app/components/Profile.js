var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    render: function () {
        var username = this.getParams().username    //username because that is what we have in the params
        return (
            <div className = "row-md-4">
                <div className= "">
                    User Profile Component --> {username}
                </div>
                <div className= "row-md-4">
                    Repos component
                </div>
                <div className= "row-md-4">
                    Notes Component
                </div>
            </div>
        )
    }
});

module.exports = Profile;
