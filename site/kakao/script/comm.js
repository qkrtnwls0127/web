//$(function(조건문){실행문});

$(function(){

  //menu
  $('.menu_depth1>li').mouseover(function(){
    $(this).children('.menu_depth2').stop().slideDown();
  })
  $('.menu_depth1>li').mouseleave(function(){
    $(this).children('.menu_depth2').stop().slideUp();
  })
  
  //mainslide
  var now =1;
  var width =1000;
  
  setInterval(function(){
    if(now<2){
      $('.mainslide ul').animate({
        'left':(now*width*(-1))+'px'
      });
      now++;
       
       }else{
         $('.mainslide ul').animate({
           'left':'0px'
         });
         now=1;
       
       }
  },2000);
  
  
  //banner layer popup
  $('.col3 a').click(function(){
    $('#modal').addClass('on');
  })
  $('#modal button').click(function(){
    $('#modal').removeClass('on');
  })
  
  //a링크 마우스 오버시
  $('a').focusin(function(){
    $(this).css('color','#ffdc00');
  })
  $('a').focusout(function(){
    $(this).css('color','inherit')
  })
  
})

