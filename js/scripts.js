$(document).ready(function(){
  var Age = parseInt(prompt ("How old are you?"))

  if (Age < 18) {
    $(".minor").show();}

    else {
    $(".adult").show();
  }
});
