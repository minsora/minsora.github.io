$(function(){
	/* $('.link_gnb').on('click', function(){
		//alert('gnb');
		var $gnb = $(this).parent();
		var $lnb = $gnb.find('.link_lnb').parent();
		var $snb = $gnb.find('.link_snb').parent();
		
		$gnb.removeClass('gnb_on');
		$lnb.removeClass('lnb_on');
		$snb.removeClass('sub_on');
		
		$gnb.addClass('gnb_on').siblings().removeClass('gnb_on');
		$lnb.eq(0).addClass('lnb_on').siblings().removeClass('lnb_on');
		$snb.eq(0).addClass('snb_on').siblings().removeClass('snb_on');
	});
	$('.link_lnb').on('click', function(){
		//alert('lnb');
	});
	$('.link_snb').on('click', function(){
		//alert('snb');
	}); */
	
	$('.btn_top').on('click', function(){
	  $('#container').animate({scrollTop:0}, 400);
	  return false;
	});
});
