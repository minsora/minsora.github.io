var contAuto = null;
var $num, $aSize;
function contMv(){
	$num++;
	if($num>=$aSize)$num=0;

	$("#camList>li>h4>a").eq($num).click()	
}

var $contAuto=setInterval(contMv,3000);


$(document).ready(function(){
	$num=0;
	$aSize=$("#camList>li>h4>a").size();

	//1.초기설정
	$("#camList li p").hide();
	$("#camList>.c1>p").show();
	$("#camList").mouseenter(function(){
		clearInterval($contAuto);
	})

	$("#camList").mouseleave(function(){
		$contAuto=setInterval(contMv,3000);
	})

	$("#camList>li>h4>a").click(function(){
		//2.p요소 전부 숨긴다.

	  if($(this).parent().next().css("display")=="none"){
			$("#camList p").slideUp();

			//3.해당하는 dd요소만 보인다.
			$(this).parent().next().slideDown("normal");
	  }

	  //3.버튼색상 비활성화
	  $("#camList>li>h4>a>img").each(function(){ //each는 if문과 같다.
			$(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
		})
		//4.해당버튼만 활성화
		$myBtn = $(this).children("img");
		$myBtn.attr("src",$myBtn.attr("src").replace(".gif","_over.gif"));
	});
});