$(document).ready(function(){
	//1.초기설정
	$("#allBoard dd").hide();
	$("#allBoard>.fs").show();
	$("#allBoard>dt>a").click(function(){
		//2.dd요소 전부 숨긴다.
		//$("#faq dd").slideUp();
		$(this).parent().next().siblings("dd").slideUp("fast"); //siblings : 형제
		//3.해당하는 dd요소만 보인다.
		$(this).parent().next().slideDown("normal");
		//4.해당하는 요소에 클래스 명을 넣어줘라.
		$("#allBoard dt").removeClass("active"); //클래스명을 지워라.
		$(this).parent().addClass("active"); //클래스명을 넣어라.
	});
});

$(document).ready(function(){
	//1.초기설정
	$("#newsBoard dd").hide();
	$("#newsBoard>dt>a").click(function(){
		//2.dd요소 전부 숨긴다.
		//$("#faq dd").slideUp();
		$(this).parent().next().siblings("dd").slideUp("fast"); //siblings : 형제
		//3.해당하는 dd요소만 보인다.
		$(this).parent().next().slideDown("normal");
		//4.해당하는 요소에 클래스 명을 넣어줘라.
		$("#newsBoard dt").removeClass("active"); //클래스명을 지워라.
		$(this).parent().addClass("active"); //클래스명을 넣어라.
	});
});