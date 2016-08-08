var bannerList, listObj, bnnZone;
var bannerAuto=null;
var direct;

function leftMv(){
	direct=0;
	//현재위치
	var nowPos=parseInt(bannerList.style.left) // "0px"-> 0
	//목표점=-160
	var targetPos=-136;
	//이동거리= Math.ceil(Math.abs((목표점-현재위치)/이동률))
	var mvPos=Math.ceil(Math.abs((targetPos-nowPos)/10));
	//if(목표점<현재위치) 이동거리=-이동거리
	if(targetPos<nowPos) mvPos=-mvPos;
	
	//현재위치속성=현재위치+이동거리+"px";
	bannerList.style.left=nowPos+mvPos+"px";
	//이동거리가 0일 될때까지 재귀함수 호출 (setTimeout)
	if(bannerAuto) clearTimeout(bannerAuto);
	if(mvPos != 0) bannerAuto=setTimeout(leftMv,100)

	if(mvPos==0){ // 목표점에 다 도착했으면
		var copyObj=listObj[0].cloneNode(true);  //복제
		bannerList.removeChild(listObj[0]); //삭제
		bannerList.appendChild(copyObj); //추가
		bannerList.style.left=0;    //left속성 0
		
		if(bannerAuto) clearTimeout(bannerAuto);
		bannerAuto=setTimeout(leftMv,2000)
	}
}


function rightMv(){
	direct=1;
	//현재위치
	var nowPos=parseInt(bannerList.style.left) // "0px"-> 0
	//목표점=0
	var targetPos=0;
	//이동거리= Math.ceil(Math.abs((목표점-현재위치)/이동률))
	var mvPos=Math.ceil(Math.abs((targetPos-nowPos)/10));
	//if(목표점<현재위치) 이동거리=-이동거리
	if(targetPos<nowPos) mvPos=-mvPos;
	
	//현재위치속성=현재위치+이동거리+"px";
	bannerList.style.left=nowPos+mvPos+"px";
	//이동거리가 0일 될때까지 재귀함수 호출 (setTimeout)
	if(bannerAuto) clearTimeout(bannerAuto);
	if(mvPos != 0) bannerAuto=setTimeout(rightMv,100)

	if(mvPos==0){ // 목표점에 다 도착했으면
		var copyObj=listObj[listObj.length-1].cloneNode(true);  //복제
		bannerList.removeChild(listObj[listObj.length-1]); //삭제
		bannerList.insertBefore(copyObj,listObj[0]); //추가
		bannerList.style.left="-136px";    //left속성 -160
		
		if(bannerAuto) clearTimeout(bannerAuto);
		bannerAuto=setTimeout(rightMv,2000)
	}
}

bannerAuto = setTimeout(leftMv,1000)


function domLoad(){

	bnnZone=document.getElementById("bannerZone");

	var btn1 = document.getElementById("leftBanner");
	var btn2 = document.getElementById("rightBanner");

	bannerList=document.getElementById("bannerList");
	bannerList.style.position="relative";
	bannerList.style.left=0;

	listObj=bannerList.getElementsByTagName("li");

	btn1.onclick=leftMv;
	btn2.onclick=rightMv;

	var myAtag=bannerList.getElementsByTagName("a");
	for(var i=0; i<myAtag.length; i++){
		myAtag[i].onfocus=myAtag[i].onmouseover=function(){
				clearTimeout(bannerAuto);
		}

		myAtag[i].onblur=myAtag[i].onmouseout=function(){
				if(direct){
					rightMv();
				}else{
					leftMv();
				}
		}
	}
}

if(window.addEventListener){
	window.addEventListener("load",domLoad,false);
}else if(window.attachEvent){
	window.attachEvent("onload",domLoad);
}