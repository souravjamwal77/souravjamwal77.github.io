/* Toggle b/w adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var topnav = document.getElementById("myTopNav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  }
  else{
    topnav.className = "topnav";
  }
}


/* Below code will hide the scroll bar while the user is scrolling down  */
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("myTopNav").style.top = "0";
  }
  else {
    document.getElementById("myTopNav").style.top = "-50px";
  }
  prevScrollpos = currentScrollpos;
}