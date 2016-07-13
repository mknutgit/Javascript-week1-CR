(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "PLACE API KEY HERE";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
