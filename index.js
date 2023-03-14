window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").style.backgroundColor = "rgba(32, 24, 19, 1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(32, 24, 19, 0)";
  }
}