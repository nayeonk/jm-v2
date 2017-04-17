(function(){

  var button = document.getElementById('menu__button'),
    wrapper = document.getElementById('menu__wrapper');

    //open and close menu when the button is clicked
  var open = false;
  button.addEventListener('click', handler, false);

  function handler(){
    if(!open){
      this.innerHTML = "<br/>-";
      classie.add(wrapper, 'opened-nav');
    }
    else{
      this.innerHTML = "<br/>+";
    classie.remove(wrapper, 'opened-nav');
    }
    open = !open;
  }
  function closeWrapper(){
    classie.remove(wrapper, 'opened-nav');
  }

})();