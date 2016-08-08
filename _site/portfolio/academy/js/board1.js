var boardList, boardObj;
var boardAuto=null;

function upMv(){
	direct=0;
	//현재위치
	var nowPos=parseInt(boardList.style.top) // "0px"-> 0
	//목표점=-160
	var targetPos=-25;
	//이동거리= Math.ceil(Math.abs((목표점-현재위치)/이동률))
	var mvPos=Math.ceil(Math.abs((targetPos-nowPos)/5));
	//if(목표점<현재위치) 이동거리=-이동거리
	if(targetPos<nowPos) mvPos=-mvPos;
	
	//현재위치속성=현재위치+이동거리+"px";
	boardList.style.top=nowPos+mvPos+"px";
	//이동거리가 0일 될때까지 재귀함수 호출 (setTimeout)
	if(boardAuto) clearTimeout(boardAuto);
	if(mvPos != 0) boardAuto=setTimeout(upMv,100)

	if(mvPos==0){ // 목표점에 다 도착했으면
		var copyObj=boardObj[0].cloneNode(true);  //복제
		boardList.removeChild(boardObj[0]); //삭제
		boardList.appendChild(copyObj); //추가
		boardList.style.top=0;    //left속성 0
		
		if(boardAuto) clearTimeout(boardAuto);
		boardAuto=setTimeout(upMv,2000)
	}
}

boardAuto = setTimeout(upMv,1000)


function boardLoad(){

	boardList=document.getElementById("boardList1");
	boardList.style.position="relative";
	boardList.style.top=0;

	boardObj=boardList.getElementsByTagName("li");

	var myAtag=boardList.getElementsByTagName("a");
	for(var i=0; i<myAtag.length; i++){
		myAtag[i].onfocus=myAtag[i].onmouseover=function(){
			clearTimeout(boardAuto);
		}
		myAtag[i].onblur=myAtag[i].onmouseout=function(){
			upMv();
		}
	}
}

if(window.addEventListener){
	window.addEventListener("load",boardLoad,false);
}else if(window.attachEvent){
	window.attachEvent("onload",boardLoad);
}