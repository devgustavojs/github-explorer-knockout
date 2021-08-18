var urlString = window.location.href;
var url = new URL(urlString);
var paramUsername = url.searchParams.get("user");
document.title = `${paramUsername} Github`;

function AppViewModel(){
  var self = this;
  self.username = paramUsername.toUpperCase();
  self.userLogin = "@" + paramUsername.toLowerCase();

  self.userFullName = ko.observable("");
  self.userImagePath = ko.observable("");
  self.userLocation = ko.observable("");
  self.userFollowers = ko.observable("");
  self.userFollowing = ko.observable("");
  self.userRepos = ko.observable("");

  self.repositories = ko.observableArray([]);
}

var appView = new AppViewModel()

ko.applyBindings(appView);

async function FetchGithub(){
  try{
    fetch(`https://api.github.com/users/${paramUsername}`)
    .then(response => response.json())
    .then(data => {

      appView.userFullName(data.name)
      .userImagePath(data.avatar_url)
      .userLocation(data.location)
      .userFollowers(data.followers)
      .userFollowing(data.following)
      .userRepos(data.public_repos);

      fetch(data.repos_url)
      .then(response => response.json())
      .then(data => {
        appView.repositories([...data])
      });
    })
  }catch(err){
    throw err
  }
}


FetchGithub();