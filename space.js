$(function() {

$('#bucket').click(function(){
  $(this).fadeOut();
});

$('#hosoda').click(function(){
  $('#bucket').fadeIn();
});

$('#hiroto').click(function(){
  $('#racket').fadeIn('slow');
});

$('#racket').click(function(){
  $('#ball').fadeIn('slow');
});

$('#uku_one').click(function(){
  $(this).fadeOut('slow');
});

$('#uku_hand').click(function(){
  $(this).fadeOut('slow');
});

$('#uku_three').click(function(){
  $(this).fadeOut('slow');
});


$('#uku_one').click(function(){
  $('#ukuone').fadeOut('slow');
});

$('#uku_hand').click(function(){
  $('#ukutwo').fadeOut('slow');
});

$('#uku_three').click(function(){
  $('#ukuthree').fadeOut('slow');
});

  // ここからメニュー
  $('#bar').click(function(){
    $('#menu').slideDown();
  });

  $('#bar').click(function(){
    $(this).fadeOut();
  });

  $('#batsu').click(function(){
    $('#menu').slideUp();
  });



  $('#batsu').click(function(){
    $('#bar').fadeIn();
  });

// ここまでメニュー





});