let isOpen = false;
$('.nav_name_container').on('click',function(){
  if(isOpen==false)
  {
    $(this).css({color: '#adadad'})
    $(this).children('.right_tick').css({
      transform: 'scale(1)'
    });
    $(this).children('.line').css({
      width: '50px',
      left: '60px',
      border: '1px solid #adadad'
    });
    isOpen=true;
  }
  else
  {
    $(this).css({color: 'rgba(0,0,0,1)'})
    $(this).children('.right_tick').css({
      transform: 'scale(0)'
    });
    $(this).children('.line').css({
      width: '10px',
      left: '25px',
      border: '1px solid rgba(54,88,255,1)'
    });
    isOpen=false;
  }
});