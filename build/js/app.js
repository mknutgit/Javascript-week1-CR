(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "";

},{}],2:[function(require,module,exports){
// uses an array of github repos
exports.listRepos = function(repositories) {

  repositories.forEach(function(repo) {
      $('.showRepos').append('<h2><a href=' + repo.html_url + '>' + repo.name + '</a></h2>');
      $('.showRepos').append('<li> Created: ' + moment(repo.created_at).format('MMM Do YYYY') + '</li>');

      if (repo.description === "") {
        $('.showRepos').append('<li> No Description Available </li><br>');
      } else {
        $('.showRepos').append('<li>' + repo.description + '</li><br>');
      }
    });

}

exports.showUserInfo = function(user) {

    $('.showUser').append('<h2>USER: ' + user.login + '</h2>');

};

},{}],3:[function(require,module,exports){
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

},{"./../.env":1}],4:[function(require,module,exports){

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

},{"./../js/display.js":2,"./../js/github.js":3}]},{},[4]);
