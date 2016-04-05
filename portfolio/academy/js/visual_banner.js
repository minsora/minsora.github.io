
function bannerLoad() {
	var btnDl = document.getElementById("issue");
	var btnDt = btnDl.getElementsByTagName("dt");
	var btnDd = btnDl.getElementsByTagName("dd");
	var btnA, btnImg, imgA, imgImg;
	var myAuto=null;
	
	for(var k =0; k<btnDd.length; k++) {
			btnDd[k].children[0].onmouseover=function(){
				clearTimeout(myAuto);
			}
			btnDd[k].children[0].onmouseout=function(){
				myAuto = setTimeout(autoBanner,3000);
			}
	}

	for(var i=0;i<btnDt.length;i++){
		btnA = btnDt[i].children[0];
		btnImg = btnA.children[0];
		
		btnA.onfocus = btnA.onmouseover = function(){
			clearTimeout(myAuto);

			//dd를 전체 숨긴다
			for(var k =0; k<btnDd.length; k++) {
				btnDd[k].style.display="none";
			}

			//2.해당 dd 요소만 보인다
			var theNext = this.parentNode.nextSibling;
			if(theNext.nodeType == 3) theNext = theNext.nextSibling;

			theNext.style.display = "block";

			//3.탭버튼 전체 비활성화
			for(var k=0;k<btnDt.length;k++) {
				var btnImg = btnDt[k].children[0].children[0];
				btnImg.src = btnImg.src.replace("_over.gif",".gif");
			}

			//4.해당 탭버튼만 활성화
			this.children[0].src = this.children[0].src.replace(".gif","_over.gif");

			//5.마우스를 올려놓았을때 멈춰라
			clearTimeout(myAuto);
		}

		btnA.onblur = btnA.onmouseout = function() { //onblur는 onfocus의 반대
			myAuto = setTimeout(autoBanner,3000);
		}
	}

	//배너 롤링
	var aNum = 0;

	function autoBanner() {
		aNum++;
		if(aNum>2) aNum = 0;
		btnA2 = btnDt[aNum].children[0];
		
		btnA2.onmouseover();
		myAuto = setTimeout(autoBanner,3000);
	}

	var myAuto = setTimeout(autoBanner,3000);
}

if(window.addEventListener) {
	window.addEventListener("load",bannerLoad,false);
}
else if(window.attachEvent) {
	window.attachEvent("onload",bannerLoad);
}
