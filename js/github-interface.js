
var getRepos = require('./../js/github.js').getRepos;
var getUser = require('./../js/github.js').getUser;
var listRepos = require('./../js/display.js').listRepos;
var showUserInfo = require('./../js/display.js').showUserInfo;

$(document).ready(function() {

  $('#repos').hide();

  $('#repo').click(function(event) {
    event.preventDefault();
    getRepos($('#username').val(), listRepos );
  });

  $('#repo').click(function(event) {
    event.preventDefault();
    getUser($('#username').val(), showUserInfo );
      $('#repos').show();
  });

});
