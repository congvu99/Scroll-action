jQuery(document).ready(function($) {
	$('.photo img:nth-child(1)').addClass('animate__animated animate__bounce animate__delay-0.3s');
			
	$(window).scroll(function(event) {
		var vi_tri=$('html,body').scrollTop();
		var hinh_1=$('.photo img:nth-child(1)').offset().top;//lấy ra vi trí
		var hinh_2=$('.photo img:nth-child(2)').offset().top;
		var hinh_3=$('.photo img:nth-child(3)').offset().top;
		var hinh_4=$('.photo img:nth-child(4)').offset().top;
		var hinh_5=$('.photo img:nth-child(5)').offset().top;
		if(vi_tri>1300)
		{
			$('.nut').addClass('hien_nut');

		}
		else{
			$('.nut').removeClass('hien_nut');
		}

		// viết chuyển động cho phần thân
		
		if(vi_tri>hinh_2-300)
		{
			$('.photo img:nth-child(2)').addClass('animate__animated animate__backInLeft animate__delay-0.3s');
			
		}
		if(vi_tri>hinh_3-300)
		{
			$('.photo img:nth-child(3)').addClass('animate__animated animate__backInRight animate__delay-0.3s');
			
		}
		if(vi_tri>hinh_4-300)
		{
			$('.photo img:nth-child(4)').addClass('animate__animated animate__backInRight animate__delay-0.3s');
			
		}
		if(vi_tri>hinh_5-300)
		{
			$('.photo img:nth-child(5)').addClass('animate__animated animate__backInUp animate__delay-0.3s');
			
		}


	});

	$('.nut').on('click', function () {
		 $('html,body').animate({
		    scrollTop:0
		  }, 1600); // for all browsers
		
	});

	

});