// your code here
function displayCommits() {
  var commits = JSON.parse(this.responseText);
  const commList = `<ul>${commits.map(r =>
    `<li>${r.html_url}</li>`).join('')}</ul>`;
  console.log(commits);
  document.getElementById('details').innerHTML = commList;
}

function displayBranches() {

}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(r =>
    `<li>${r.html_url}/${name}</li>`).join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories() {
  const username = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function getCommits(el) {
  const username = el.dataset.username;
  const repos = el.dataset.repository;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', `https://api.github.com/repos/${username}/${repos}/commits`);
  req.send();
}

function getBranches(el) {
  const username = el.dataset.username;
  const repos = el.dataset.repository;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayBranches);
  req.open('GET', `https://api.github.com/repos/${username}/${repos}/branches`);
  req.send();
}
