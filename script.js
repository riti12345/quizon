
$(document).ready(function(){
	$('.bxSlider').bxSlider({
		mode:'vertical',
		useCSS:false,
		infiniteLoop:true,
		hideControlOnEnd:false,
		auto:true,
		autoControls:true,
		mode:'fade',
		speed:5000,
		pause:false,
		slideWidth:320,
		slideMargin:10,
			});
			
			 $('.outside').on({
     mouseover:function()
      {
            $('.outside').css('Cursor','hand');
              $('.outside').css('border-color','white');
             
               
      },
      mouseout:function()
      {
              $('.outside').css({
                'cursor':'pointer',
                'border-color':'gray'
              });
              
      }
    });
			 $(".content").show(function(){
			 	$("p").fadeIn(1000);
			 	});

			 $('.countdown').hide();
			 $('#next').hide();
			$('.ans-demo').hide();
			$(".general").click(function()
			 {
			 	$('.demo').fadeOut('slow');
			 	$('.ans-demo').fadeIn();
			 	 $('.countdown').show();
			 $('#next').show();
			});
			/*$('.outside').not($div).fadeout(slow);
			if($div.is(":visible"))
				{
					$div.hide();
				}
				else{
					$('.ans-display').show();
				}
				  e.preventDefault();
					/*$('<div class="ans-display">\
					<div class="countdown">\
					<span id="minutes">00</span>\
					<span>:</span>\
					<span id="seconds">00</span>\
					</div>\
			
   			<br/>\
					<div id="quiz"></div>\
			<div class='button' id='next'><a href='#'>Next</a></div>\
    		<div class='button' id='prev'><a href='#'>Prev</a></div>\
    		<div class='button' id='start'> <a href='#'>Start Over</a></div>\
			</div>').show();//.after('.outside').show().delay(1000);


			 });*/
			 
	 });









