
function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`, {
    	method: 'get'
    }).then(function(response) {
        console.log(response);
    	return response.json();
    }).catch(function(err) {
    	throw new Error('Error fetching data, pelase try again.')
    });
};


function getUserInfo(username) {
    fetch(`https://api.github.com/users/${username}`, {
    	method: 'get'
    }).then(function(response) {
    	return response.json();
    }).catch(function(err) {
    	throw new Error('Error fetching data, pelase try again.')
    });
