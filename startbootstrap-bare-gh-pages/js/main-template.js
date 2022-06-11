var docStyle = document.documentElement.style;

// setting CSS variables inside this JS where they 
// can be declaratively used inside the CSS file.
document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
  // console.log(e);
  var ball2_x = parseInt($('.ball2').css('left'));
  var ball2_y = parseInt($('.ball2').css('top'));
  var ball_x = parseInt($('.ball').css('left'));
  var ball_y = parseInt($('.ball').css('top'));
  
  console.log(ball2_x);
  console.log(e.clientX);
  console.log(ball2_y);
  console.log(e.clientY);
  if (((Math.abs(ball2_x-e.clientX) + Math.abs(ball2_y-e.clientY))) < 100){
      $('.ball2').css('left', ball2_x + (ball2_x - e.clientX)/5);
      $('.ball2').css('top', ball2_y + (ball2_y - e.clientY)/5);
  }
  if (((Math.abs(ball_x-e.clientX) + Math.abs(ball_y-e.clientY))) < 100){
    $('.ball').css('left', ball_x + (ball_x - e.clientX)/5);
    $('.ball').css('top', ball_y + (ball_y - e.clientY)/5);
  }

  var ball3_x = parseInt($('.ball3').css('left'));
  var ball3_y = parseInt($('.ball3').css('top'));
  if (((Math.abs(ball3_x-e.clientX) + Math.abs(ball3_y-e.clientY))) < 100){
    $('.ball3').css('left', ball3_x + (ball3_x - e.clientX)/5);
    $('.ball3').css('top', ball3_y + (ball3_y - e.clientY)/5);
  }
  var ball4_x = parseInt($('.ball4').css('left'));
  var ball4_y = parseInt($('.ball4').css('top'));
  if (((Math.abs(ball4_x-e.clientX) + Math.abs(ball4_y-e.clientY))) < 100){
    $('.ball4').css('left', ball4_x + (ball4_x - e.clientX)/5);
    $('.ball4').css('top', ball4_y + (ball4_y - e.clientY)/5);
  }
  var ball5_x = parseInt($('.ball5').css('left'));
  var ball5_y = parseInt($('.ball5').css('top'));
  if (((Math.abs(ball5_x-e.clientX) + Math.abs(ball5_y-e.clientY))) < 100){
    $('.ball5').css('left', ball5_x + (ball5_x - e.clientX)/5);
    $('.ball5').css('top', ball5_y + (ball5_y - e.clientY)/5);
  }

});