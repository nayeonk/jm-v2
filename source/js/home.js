var iconButton = document.getElementById('home__icons-main');
var icons = document.querySelectorAll('#home__icons span');
var iconCloseButton = document.getElementById('iconClose');
var logo = document.getElementById('name');

var iconOpen = false;
	iconButton.addEventListener('click', iconHandler, false);
	iconCloseButton.addEventListener('click', iconHandler, false);
	function iconHandler() {
		if(!iconOpen){
			for (var i = 0; i < icons.length; i++) {
				classie.add(icons[i], 'opened-icons');
			}
			classie.add(iconCloseButton, 'opened-icons');
			classie.add(logo, 'fade');
    }
    else {
    	for (var i = 0; i < icons.length; i++) {
				classie.remove(icons[i], 'opened-icons');
			}
			classie.remove(iconCloseButton, 'opened-icons');
			classie.remove(logo, 'fade');

    }
    iconOpen = !iconOpen;
	}