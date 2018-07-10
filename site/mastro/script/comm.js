$(function(){
  
    var num=0;
    $('.main_slide li').eq(num).children('.big').fadeIn('fast');
    $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);
    

    setInterval(function(){
        $('.main_slide li').eq(num).children('.big').fadeOut('fast');
        $('.main_slide li').eq(num).children('.small').fadeTo("slow",0.5);
        
        
        
        if(num==3){
            num=0;
            $('.main_slide li').eq(num).children('.big').fadeIn('fast');
            $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);
        }else{
            num++;
            $('.main_slide li').eq(num).children('.big').fadeIn('fast');
            $('.main_slide li').eq(num).children('.small').fadeTo("slow",1);
        }
    },2000);
  
    //banner layer popup
  $('.col3 a').click(function(){
    $('#modal').addClass('on');
  })
  $('#modal button').click(function(){
    $('#modal').removeClass('on');
  })
  
})



