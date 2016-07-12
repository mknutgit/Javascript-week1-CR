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
