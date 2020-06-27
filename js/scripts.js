// menu click event buttons

document.getElementById("twitter-icon").addEventListener("click", function( event ) {
    window.open('https://twitter.com/rauluhlmann')
  }, false);
document.getElementById("mail-icon").addEventListener("click", function( event ) {
    document.location.href = "mailto:rmuhlmann@gmail.com";
}, false);
document.getElementById("whatsapp-icon").addEventListener("click", function( event ) {
  window.open("https://bit.ly/whatsraulmu");
}, false);
document.getElementById("github-icon").addEventListener("click", function( event ) {
  window.open("https://github.com/raulmu");
}, false);
document.getElementById("linkedin-icon").addEventListener("click", function( event ) {
  window.open("https://www.linkedin.com/in/rauluhlmann");
}, false);


// simple way to show/hide button based on scrollTop

let showGoToTopButton = $(window).scrollTop() > 0 ? true : false;

if(showGoToTopButton){
  $("#backtotop").show();
} else {
  $("#backtotop").hide();
}

$(window).scroll((e) => {
  showGoToTopButton = $(window).scrollTop() > 0 ? true : false;
  if(showGoToTopButton){
    $("#backtotop").show();
  } else {
    $("#backtotop").hide();
  }
});
