//navbar
window.onscroll = function() { 
    fixarNavbar();
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function fixarNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("fixo");
    } else {
      navbar.classList.remove("fixo");
    }
  }
  
//jhafjekbfjn




