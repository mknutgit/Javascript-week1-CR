var apiKey = require('./../.env').apiKeyGithub;

// Take a user name (string) and passes it to callback (function)
exports.getRepos = function(userName, callback) {
  // Ajax request to get all repo information for userName
  if (apiKey) {
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey + '&sort=created&per_page=100')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + userName + '/repos?sort=created&per_page=100')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }
};

exports.getUser = function(userName, callback) {
  // Ajax request to get all repo information for userName
  if (apiKey) {
    $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey)
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + userName + '?')
    .then(function(response){
      callback(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  }
};
