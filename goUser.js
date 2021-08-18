var searchButton = document.getElementById('btnSearch');

function handleSearchUser(){
  var username = document.getElementById('iUsername').value;
  if(username){
    window.open(`/profile/index.html?user=${username}`, "_self");
  }else{
    alert('Please, enter a Github Username');
    searchButton.disabled = true;
  }
}

function handleInputOnChange(){
  var username = document.getElementById('iUsername').value;
 if(username){
  searchButton.disabled = false;
 }else{
   searchButton.disabled = true;
 }
}

document.body.onkeydown = function(e) {
  if (e.keyCode == 13)
  handleSearchUser();
};