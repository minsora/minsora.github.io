$(document).ready(function(){
	$("#selectList").hide();

	$("#selectBox").click(function(){
		$("#selectList").show();
	});

	$("#selectList").mouseleave(function(){
		$("#selectList").hide();
	});
	$("#selectBox").css("font-size","11px").css("color","#a1a1a1");
	$("#selectList a").click(function(){
		$("#selectBox").val($(this).text());
		$("#selectList").hide(),1000;
	});
});