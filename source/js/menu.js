(function(){

  var menuButton = document.getElementById('menu__button'),
    menuWrapper = document.getElementById('menu__wrapper');

    //open and close menu when the button is clicked
  var menuOpen = false;
  menuButton.addEventListener('click', menuHandler, false);

  function menuHandler(){
    if(!menuOpen){
      this.innerHTML = "<br/>-";
      classie.add(menuWrapper, 'opened-nav');
    }
    else{
      this.innerHTML = "<br/>+";
      classie.remove(menuWrapper, 'opened-nav');
    }
    menuOpen = !menuOpen;
  }
  function closeWrapper(){
    classie.remove(menuWrapper, 'opened-nav');
  }

})();