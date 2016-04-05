var qnum = navigator.userAgent.toLowerCase().indexOf("webkit");

var scrTop;
var myQuick;

window.onscroll = function(){
	if(qnum<0){
		scrTop = document.documentElement.scrollTop+298;
		//console.log(document.documentElement.scrollTop);
	}
	else{
		scrTop = document.body.scrollTop+298;
		//console.log(document.body.scrollTop);
	}

	mvQuick();
}

var autoScr = null;

function mvQuick(){
	//현재위치
	var nowPos = parseInt(myQuick.style.top); //50px
	//이동거리 = Math.ceil(Math.abs((목표점-현재위치)/이동률))
	var addPos = Math.ceil(Math.abs((scrTop-nowPos)/8));
	if(scrTop<nowPos) addPos =- addPos;
	//quick의 top 속성을 바꾼다
	myQuick.style.top = nowPos + addPos + "px";
	//setTimeout 실행
	if(autoScr) clearTimeout(autoScr);
	autoScr = setTimeout(mvQuick,50);
}



function quickLoad(){
	myQuick = document.getElementById("quick");
	myQuick.style.top = "298px";
}
if(window.addEventListener){
	window.addEventListener("load",quickLoad,false);
}
else if(window.attachEvent){
	window.attachEvent("onload",quickLoad);
}
