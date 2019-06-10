// your code here
function displayCommits() {

}

function displayBranches() {

}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  const repoList = `${repos.map(r =>
    '<li></li>').join(' ')}`
}

function getRepositories() {
  const username = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function getCommits() {

}

function getBranches() {

}
