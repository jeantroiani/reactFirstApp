import React from 'react';
import Router from 'react-router';
import routes from './config/routes'

// Router.run(routes, function(Root) {
//     React.render(<Root />, document.getElementById('app'));
// });
//ES6 way
Router.run(routes, (Root, state) => {
    React.render(<Root {...state} />, document.getElementById('app'));
});
