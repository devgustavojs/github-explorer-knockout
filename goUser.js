function SearchViewModel(){
  var self = this;

  self.inputValue = ko.observable();

  self.searchButton = () => handleSearchUser();
  
  self.isButtonDisabled = ko.observable(true);

  self.inputEventListener = () => {

    if(SearchVM.inputValue()){
      SearchVM.isButtonDisabled(false);
    }else{
      SearchVM.isButtonDisabled(true);
    }
  }
}

var SearchVM = new SearchViewModel();

ko.applyBindings(SearchVM);

function handleSearchUser(){
  var username = SearchVM.inputValue();
  if(username){
    window.open(`/github-search-knockout/profile/index.html?user=${username}`, "_self");
  }else{
    alert('Please, enter a Github Username');
  }
}

document.body.onkeydown = function(e) {
  if (e.keyCode == 13)
  handleSearchUser();
};