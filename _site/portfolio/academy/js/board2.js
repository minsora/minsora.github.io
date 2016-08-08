var boardList2, boardObj2;
var boardAuto2=null;

function upMv2(){
	direct=0;
	//현재위치
	var nowPos=parseInt(boardList2.style.top) // "0px"-> 0
	//목표점=-160
	var targetPos=-25;
	//이동거리= Math.ceil(Math.abs((목표점-현재위치)/이동률))
	var mvPos=Math.ceil(Math.abs((targetPos-nowPos)/5));
	//if(목표점<현재위치) 이동거리=-이동거리
	if(targetPos<nowPos) mvPos=-mvPos;
	
	//현재위치속성=현재위치+이동거리+"px";
	boardList2.style.top=nowPos+mvPos+"px";
	//이동거리가 0일 될때까지 재귀함수 호출 (setTimeout)
	if(boardAuto2) clearTimeout(boardAuto2);
	if(mvPos != 0) boardAuto2=setTimeout(upMv2,100)

	if(mvPos==0){ // 목표점에 다 도착했으면
		var copyObj=boardObj2[0].cloneNode(true);  //복제
		boardList2.removeChild(boardObj2[0]); //삭제
		boardList2.appendChild(copyObj); //추가
		boardList2.style.top=0;    //left속성 0
		
		if(boardAuto2) clearTimeout(boardAuto2);
		boardAuto2=setTimeout(upMv2,2000)
	}
}

boardAuto2 = setTimeout(upMv2,1000)


function board2Load(){

	boardList2=document.getElementById("boardList2");
	boardList2.style.position="relative";
	boardList2.style.top=0;

	boardObj2=boardList2.getElementsByTagName("li");

	var myAtag=boardList2.getElementsByTagName("a");
	for(var i=0; i<myAtag.length; i++){
		myAtag[i].onfocus=myAtag[i].onmouseover=function(){
			clearTimeout(boardAuto2);
		}
		myAtag[i].onblur=myAtag[i].onmouseout=function(){
			upMv2();
		}
	}
}

if(window.addEventListener){
	window.addEventListener("load",board2Load,false);
}else if(window.attachEvent){
	window.attachEvent("onload",board2Load);
}