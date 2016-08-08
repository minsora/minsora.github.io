function fontLoad() {
	var plusObj = document.getElementById("plusBtn");
	var baseObj = document.getElementById("baseBtn");
	var minObj = document.getElementById("minBtn");
	var bodyObj = document.getElementsByTagName("body")[0];
	var baseSize = 11;

	plusObj.onclick = function() {
		if(baseSize>=14){
			alert("최대로 증가한 크기입니다.");
			return;
		}
		baseSize++;
		bodyObj.style.fontSize = baseSize+"px";
		//console.log(baseSize);

	}

	minObj.onclick = function() {
		if(baseSize<=8){
			alert("최소로 감소한 크기입니다.");
			return;
		}
		baseSize--;
		bodyObj.style.fontSize = baseSize+"px";
		console.log(baseSize);

	}

	baseObj.onclick = function() {
		baseSize=11;
		bodyObj.style.fontSize = baseSize+"px";
		console.log(baseSize);
	}
}

if(window.addEventListener) {
	window.addEventListener("load",fontLoad,false);
} 
else if (window.attachEvent) {
	window.attachEvent("onload",fontLoad);
}
