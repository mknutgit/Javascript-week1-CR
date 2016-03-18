var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    // $('showRepo')
  })

  .fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
