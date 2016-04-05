var mainNum=1;
var subNum=1;
var myAuto=null;
var myMenu,myList,subList;

function chkNow(){
	if(mainNum && subNum){

		//1.서브 메뉴들을 전부 숨긴다(for, display='none')
		for(var k=0; k<subList.length; k++){
			subList[k].style.display="none";
		}

		//3.전체 대메뉴가 비활성화 된다(for, replace)
		for(var i=0; i<myList.length; i++){
			var outImg = myList[i].children[0].children[0];
			outImg.src=outImg.src.replace("_over.gif",".gif");
		}
	}
}

function menuLoad(){
	myMenu = document.getElementById("gnb"); //탑메뉴전체 ul
	myList = myMenu.children; //menu 7개 li
	subList = myMenu.getElementsByTagName("ul"); //서브메뉴 ul
	
	for(var i=0; i<myList.length; i++){
		
		var menuBtn = myList[i].children[0];
		menuBtnonfocus = menuBtn.onmouseover=function(){
			mainNum=0;

			//1.서브 메뉴들을 전부 숨긴다(for, display='none')
			for(var k=0; k<subList.length; k++){
				subList[k].style.display="none";
			}
		
			//2.해당 서브메뉴만 보인다(this, nextSibling, display='block')
			var theText=this.nextSibling;
			if(theText.nodeType==3) theText=theText.nextSibling;
			if(theText)theText.style.display="block"; //if(theText) 값이 있을때만 block. 서브메뉴가 없어도 오류안남
			if(theText)theText.style.border="2px solid #7cb31d";

			//3.전체 대메뉴가 비활성화 된다(for, replace)
			for(var i=0; i<myList.length; i++){
				var outImg = myList[i].children[0].children[0];
				outImg.src=outImg.src.replace("_over.gif",".gif");
			}

			//4.해당 대메뉴에 버튼만 활성화 시킨다(this, children, replace)
			var onImg = this.children[0];
			onImg.src = onImg.src.replace(".gif","_over.gif");

		}//onmouseover 이벤트 닫음

		menuBtn.onblur = menuBtn.onmouseout=function(){
			mainNum = 1;
			if(myAuto) clearTimeout(myAuto);
			myAuto = setTimeout(chkNow,500);
		}

	}//for문 닫음
	
	//서브메뉴 a요소에 onmouseover, onmouseout 이벤트
	for(var i=0;i<subList.length;i++){
		var mySub = subList[i].children;
		for(var k=0;k<mySub.length;k++) {
			var subBtn = mySub[k].children[0];
			subBtn.onfocus = subBtn.onmouseover = function(){
				subNum = 0;
				//해당 버튼 이미지 속성만 활성화로 바뀐다
				if(this.children[0].src.indexOf("_over")<0) this.children[0].src = this.children[0].src.replace(".gif","_over.gif");
			}
			subBtn.blur = subBtn.onmouseout = function(){
				subNum = 1;
				if(myAuto) clearTimeout(myAuto);
				myAuto = setTimeout(chkNow,500);
				//해당 버튼 이미지 속성만 활성화로 바뀐다
				this.children[0].src = this.children[0].src.replace("_over.gif",".gif");
			}
		}
	}
}//menuLoad


	if(window.addEventListener){
		window.addEventListener("load",menuLoad,false)
	}else if(window.attachEvent){
		window.attachEvent("onload",menuLoad);
	}