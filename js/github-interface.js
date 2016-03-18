var apiKey = require('./../.env').apiKey;
var repos = require('./../js/github.js');
var user = require('./../js/github.js');

$(document).ready(function() {
  $('#repos').hide();

  $('#repo').click(function() {
    $('#repos').show();

    var username = $('#username').val();

    $('#username').val('');

    user.getUser(username);
    repos.getRepos(username);

  });
});
