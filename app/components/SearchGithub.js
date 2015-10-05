var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function () {
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = '';
        this.transitionTo('profile', {username: username});
    },
    render: function () {
        return (
            <div className="col-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="username" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button">Search Github </button>
                    </div>
                </form>
            </div>
        )
    }
});


module.exports = SearchGithub;
