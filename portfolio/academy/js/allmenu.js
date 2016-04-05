var myTotal;
var autoTotal = null;

function showTotal(targetY) {
	
	//현재위치
	var nowPos = parseInt(myTotal.style.top);

	//이동거리 = Math.ceil(Math.abs((도착점-현재위치)/이동률))
	var addY = Math.ceil(Math.abs((targetY-nowPos)/10));
	if(targetY<nowPos) addY =- addY;

	//top속성 = 현재위치 + 이동거리 + 'px'
	myTotal.style.top = nowPos + addY + 'px';

	//setTimeout
	if(autoTotal) clearTimeout(autoTotal);
	autoTotal = setTimeout("showTotal("+targetY+")",50);

}

function totalMenuLoad() { 
	//alert("야옹");
	
	myTotal = document.getElementById("totalbox");
	myTotal.style.top = "-550px";
	
	//전체메뉴 보기 이벤트
	var showBtn = document.getElementById("totalmenu").children[0];
	showBtn.onclick = function(){
		showTotal(0);
	}

	//전체메뉴 닫기 이벤트
	var closeBtn = document.getElementById("totClose");
	closeBtn.onclick = function(){
		showTotal(-650);
	}
}

if(window.addEventListener) {
	window.addEventListener("load",totalMenuLoad,false);
}
else if(window.attachEvent){
	window.attachEvent("onload",totalMenuLoad);
}