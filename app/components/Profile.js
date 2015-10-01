var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    render: function () {
        return (
            <div className = "row-md-4">
                <div className= "">
                    User Profile Component
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
