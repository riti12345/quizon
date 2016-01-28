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
			 	/*,function(){
			 		$("p").fadeIn(4000);*/
			 	});
			 	return false;
			 
	 });















/*

		$('.ans-display').append($('.G-ques').append("<p>"+question+ "</p>"+"<br>"+" <br>" + "<li>"+option+ "<p>"+answer+"</p>"+"</li>"));
	});
  

	$('.countries').on('click',function(){
		$('.C-ques').insertAfter(".ans-display").delay(5000).hide();

	});

	*/
   