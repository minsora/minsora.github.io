$(document).ready(function(){
	var $careNum=0;
	var $theSize=$("#movieList li").size();

	$("#movieList li").hide();
	$("#movieList li").eq(0).show();
	
	$("#leftBtn").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$("#movieList li").hide();
		$("#movieList li").eq($careNum).show();		
	})
	
	$("#rightBtn").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$("#movieList li").hide();
		$("#movieList li").eq($careNum).show();		
	})
});