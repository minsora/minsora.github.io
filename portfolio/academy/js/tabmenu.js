function tabLoad(){
	//alert("야옹");
	var myTab = document.getElementById("noticeTab");
	var hObj = myTab.getElementsByTagName("h3");
	var myList = myTab.getElementsByTagName("ul");

	for(var i=0;i<hObj.length;i++){
		var theObj = hObj[i].children[0];
		theObj.onfocus = theObj.onmouseover = function(){
			//1.div 전체를 숨긴다
			for(var k =0; k<myList.length; k++) {
				myList[k].style.display="none";
			}
			
			//2.해당 div 요소만 보인다
			var theNext = this.parentNode.nextSibling; //parentNode : 부모요소
			if(theNext.nodeType == 3) theNext = theNext.nextSibling;
				/* 
				   nodeType 프로퍼티는 “요소”나 “속성” 같은 문자열이 아니라 숫자를 반환해준다.

				   nodeType은 1,2,3으로 출력이 되는데,
				   •요소 노드의 nodeType 의 값은 1
				   •속성 노드의 nodeType 의 값은 2
				   •텍스트 노드의 nodeType 의 값은 3

				   위의 nodeType == 3은 공백을 의미한다.
				*/

			theNext.style.display = "block";
			
			//3.탭버튼 전체 비활성화
			for(var k=0;k<hObj.length;k++) {
				var myImg = hObj[k].children[0].children[0];
				myImg.src = myImg.src.replace("_over.gif",".gif");
			}

			//4.해당 탭버튼만 활성화
			this.children[0].src = this.children[0].src.replace(".gif","_over.gif");

		}//theObj 이벤트 닫음
	}//for문 닫음

	/*666666666666666
	var myGTab = document.getElementById("galleryTab");
	var gObj = myGTab.getElementsByTagName("h3");
	var myGList = myGTab.getElementsByTagName("ul");

	for(var i=0;i<gObj.length;i++){
		var theObj = gObj[i].children[0];
		theObj.onfocus = theObj.onmouseover = function(){
			//1.div 전체를 숨긴다
			for(var k =0; k<myGList.length; k++) {
				myGList[k].style.display="none";
			}
			
			//2.해당 div 요소만 보인다
			var theNext = this.parentNode.nextSibling; //parentNode : 부모요소
			if(theNext.nodeType == 3) theNext = theNext.nextSibling;
				/* 
				   nodeType 프로퍼티는 “요소”나 “속성” 같은 문자열이 아니라 숫자를 반환해준다.

				   nodeType은 1,2,3으로 출력이 되는데,
				   •요소 노드의 nodeType 의 값은 1
				   •속성 노드의 nodeType 의 값은 2
				   •텍스트 노드의 nodeType 의 값은 3

				   위의 nodeType == 3은 공백을 의미한다.
				*/

			/* 666666666666
			
			theNext.style.display = "block";
			
			//3.탭버튼 전체 비활성화
			for(var k=0;k<gObj.length;k++) {
				var myImg = gObj[k].children[0].children[0];
				myImg.src = myImg.src.replace("_over.gif",".gif");
			}

			//4.해당 탭버튼만 활성화
			this.children[0].src = this.children[0].src.replace(".gif","_over.gif");
			66666666666666*/

/*666666666666
		}//theObj 이벤트 닫음
	}//for문 닫음

	66666666666*/
}//tabLoad 함수 닫음

if(window.addEventListener) {
	window.addEventListener("load",tabLoad,false);
}
else if(window.attachEvent) {
	window.attachEvent("onload",tabLoad);
}