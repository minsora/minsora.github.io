//1.이동 버튼을 클릭 했을때
function relSiteLoad(){
	var myBtn = document.getElementById("btn1");
	var mySelect = document.form1.relsite;
	myBtn.onclick = function(){
		var url = "http://"+mySelect.value;
		window.open(url);
		return false;
	}
}

if(window.addEventListener) {
	window.addEventListener("load",relSiteLoad,false);
}
else if(window.attachEvent) {
	window.attachEvent("onload",relSiteLoad);
}