function SearchViewModel(){
  var self = this;

  self.inputValue = ko.observable();

  self.searchButton = () => handleSearchUser();
  
  self.isButtonDisabled = ko.pureComputed(() => {
    if(self.inputValue()){
      return false;
    }else{
      return true;
    }
  })

  //self.inputValue.subscribe((value) => {
  //  if( value != ""){
  //    SearchVM.isButtonDisabled(false);
  //  }else{
  //    SearchVM.isButtonDisabled(true);
  //  }
  //})
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