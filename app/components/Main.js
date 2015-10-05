var React = require('react');
var Router = require('react-router');
var SearchGithub = require('./SearchGithub');
var RouteHandler = Router.RouteHandler;


var Main = React.createClass({
    render: function() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="margin-top">
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = Main;
