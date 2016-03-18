var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#repo').click(function() {


    var username = $('#username').val();

    $('#username').val('');

    getRepos(username);

  });
});
