var apiKey = require('./../.env').apiKey;


exports.getUser = function(username){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(user) {

    $('.showUser').append('<h2>USER: ' + user.login + '</h2>');

  })

  .fail(function(error) {
    alert("No user found, try again!");
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repositories) {
    console.log(repositories);

    repositories.forEach(function(repo) {
      $('.showRepos').append('<li> Repository Name: ' + repo.name + '</li>');
      $('.showRepos').append('<li> Created Date: ' + repo.created_at + '</li>');

      if (repo.description === "") {
        $('.showRepos').append('<li> No Description Available </li><br>');
      } else {
        $('.showRepos').append('<li>' + repo.description + '</li><br>');
      }
    });
  })

  .fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
