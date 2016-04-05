var lastMainMenu = $("#main_benner ul.main_benner_img li").last();		
$("#main_benner ul.main_benner_img").prepend(  lastMainMenu  );	
$("#main_benner ul.main_benner_img").css("left",-1000);

var moveStatus = false;

function displayUp(){
	   if(moveStatus) {
		  return;   
	   }
	$("#main_benner ul.main_benner_img").animate({left:-2000},2000, function() {	
	
	    var firstMenu = $("#main_benner ul.main_benner_img li").first();		
		$(this).append(  firstMenu  );		
		$(this).css("left",-1000);
		moveStatus = false;
	} );
		
}


$("#main_benner .main_con").on("mouseenter", function(){
	    clearInterval(mainId);
	    $(".move").fadeIn(500);
});

$("#main_benner .main_con").on("mouseleave", function(){
	    $(".move").fadeOut(500);
		mainId = setInterval("displayUp()",5000);
});

$("#main_benner a.pre").on("click", function(){
	   if(moveStatus) {
		  return;   
	   }
	    nextImgFn();
	  return false;
});

$("#main_benner a.next").on("click", function(){
	   if(moveStatus) {
		  return;   
	   }	
	 
      prevImgFn();	   
	  return false;	
});

function prevImgFn(){
	moveStatus = true;
	$("#main_benner ul.main_benner_img").stop().animate({left:-2000},2000, function() {	
	
	    var firstMenu = $("#main_benner ul.main_benner_img li").first();		
		$(this).append(  firstMenu  );		
		$(this).css("left",-1000);
		moveStatus = false;
	} );	
}


function nextImgFn(){
	moveStatus = true;
	var lastMenu = $("#main_benner ul.main_benner_img li").last();		
	 $("#main_benner ul.main_benner_img").prepend(lastMenu);
     $("#main_benner ul.main_benner_img").css("left",-2000);   
   	 $("#main_benner ul.main_benner_img").stop().animate({left:-1000},2000, function(){
		 moveStatus = false;
		 });
}

var mainId = setInterval("displayUp()",5000);
 