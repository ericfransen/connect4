// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function () {
  var spot = $('.spot');
  var turn = 1

  $("div.white").click(function() {
    $( this ).fadeOut('slow', function(){
      if(turn % 2 != 0) {
        $( this ).removeClass('white').addClass('blue').fadeIn('slow');
      } else {
        $( this ).removeClass('white').addClass('red').fadeIn('slow');
      }
    });
    alert(turn)
    alert(turn % 0)

    turn++
  });
});


// if(turn % 2 != 0) {
//   $("div.white").click(function() {
//     $( this ).fadeOut('slow', function(){
//       $( this ).removeClass('white').addClass('blue').fadeIn('slow');
//     });
//     alert(turn)
//     turn++
//   });
// } else if(turn % 2 ===0) {
//   $("div.white").click(function() {
//     $( this ).fadeOut('slow', function(){
//       $( this ).removeClass('white').addClass('red').fadeIn('slow');
//     });
//     turn++
//   });
// }
