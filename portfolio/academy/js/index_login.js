$(document).ready(function(){
	$("#login>.idbox>input").click(function(){
		$(this).css("background","none").css("background-color","#fff");
	});

	$("#login>.pwbox>input").click(function(){
		$(this).css("background","none").css("background-color","#fff");
	});

	$("#login>.idbox>input").focusout(function(){
		if($(this).val()==""){
			$(this).css("background","url(images/idboxTxt.gif) no-repeat");
		}else{
			$(this).css("background-color","#fff");
		}
	});

	$("#login>.pwbox>input").blur(function(){
		if($(this).val()==""){
			$(this).css("background","url(images/pwboxTxt.gif) no-repeat");
		}else{
			$(this).css("background-color","#fff");
		}
	});

});