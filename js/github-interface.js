var apiKey = require('./../.env').apiKey;
var gitHub = require('./../js/github.js');
var response;

$(document).ready(function() {
  $('#repo').click(function(event) {
    // event.preventDefault();

    var user = $('#userName').val();

    $('#userName').val('');

    gitHub.getRepos(response);
  });
});
