$(document).ready(function(){
		$("#galleryTab div ul").hide();
		$("#galleryTab div ul:eq(0)").show(); //:eq(0) - 인덱스 번호 0번

		$("#galleryTab div h3 a").bind("mouseover focus",function(){
				$("#galleryTab div ul").hide();
				$(this).parent().next().show();

				//버튼색상 활성화
				$("#galleryTab h3 img").each(function(){ //each는 for문과 같은 역활을 한다.
					$(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
				});
				$(this).children().attr("src",$(this).children().attr("src").replace(".gif","_over.gif"));

		})
});