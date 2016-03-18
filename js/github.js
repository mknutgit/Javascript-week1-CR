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
      $('.showRepos').append('<h2><a href=' + repo.html_url + '>' + repo.name + '</a></h2>');
      $('.showRepos').append('<li> Created: ' + moment(repo.created_at).format('MMM Do YYYY') + '</li>');

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
