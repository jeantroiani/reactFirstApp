import React from 'react';

// var Repos =  React.createClass({
//     propTypes: {
//             username: React.PropTypes.string.isRequired,
//             repos: React.PropTypes.array.isRequired
//     },
//     render: function () {
//         var repos = this.props.repos.map(function (repo, index) {
//             return (
//                 <li className="list-group-item" key={index}>
//                     {repo.htlm_url && <h4><a href={repo.htlm_url}>{repo.name}</a></h4>}
//                     {repo.description && <p>{repo.description}</p>}
//
//                 </li>
//             )
//         });
//         return (
//             <div>
//                 <h3>Repos:</h3>
//                 <ul>
//                     {repos}
//                 </ul>
//             </div>
//         )
//     }
// })

class Repos extends React.Components {
    render() {
        var repos = this.props.repos.map((repo, index)=> {
            return (
                <li className="list-group-item" key={index}>
                    {repo.htlm_url && <h4><a href={repo.htlm_url}>{repo.name}</a></h4>}
                    {repo.description && <p>{repo.description}</p>}

                </li>
            )
        });
        return (
            <div>
                <h3>Repos:</h3>
                <ul>
                    {repos}
                </ul>
            </div>
        )
    }
}

Repos.propTypes = {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
}

export default Repos;
