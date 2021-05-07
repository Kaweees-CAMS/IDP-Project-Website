function arrayContains(needle, arrhaystack) {
  return (arrhaystack.indexOf(needle) > -1);
}
$( document ).ready(function() {
  var hash = document.location.hash;
  // console.log(hash);
  // console.log(hash.replace('#', ""));
  if (hash) {
    if (arrayContains(hash.replace('#', ""), ["687A", "687B", "687C", "687D", "687E", "687G"])) {
      $('.nav-item .' + hash.replace('#', "")).toggleClass('active show');
      $('.tab-pane.' + hash.replace('#', "")).toggleClass('active show');
    }
    else {
      $('.nav-item .687A').toggleClass('active show');
      $('.tab-pane.687A').toggleClass('active show');
    }
  }
  else {
    $('.nav-item .687A').toggleClass('active show');
    $('.tab-pane.687A').toggleClass('active show');
  }
});