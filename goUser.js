var searchButton = document.getElementById('btnSearch');

function handleSearchUser(){
  var username = document.getElementById('iUsername').value;
  if(username){
    window.open(`/github-search-knockout/profile/index.html?user=${username}`, "_self");
  }else{
    alert('Please, enter a Github Username');
    searchButton.disabled = true;
  }
}

document.getElementById("iUsername").addEventListener('input', handleInputChange);

function handleInputChange(){
 if(this.value){
  searchButton.disabled = false;
 }else{
   searchButton.disabled = true;
 }
}

document.body.onkeydown = function(e) {
  if (e.keyCode == 13)
  handleSearchUser();
};