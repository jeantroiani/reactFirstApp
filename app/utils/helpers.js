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
};


funtion GithubHelper = {

    getGithubUserInfo = function (username) {
        let promise = new Promise(
            function (resolve, reject) {
                getUserInfo(username);
                if(getUserInfo) {
                    resolve(data);
                } else {
                    reject(error);
                }
            }
        );

        promise.then (
            function (data) {
                return data
            }
            function (error) {
                throw new Error('Error happened, trying to connect with Github');
            }
        )
    }
};

module.exports = GithubHelper;
