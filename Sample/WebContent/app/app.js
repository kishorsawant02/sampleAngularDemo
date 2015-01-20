var sample=angular.module('sample',['ui.router']);
sample.controller('menuSelection',function(){
	
	
	$("#menuBar ul li").click(function(){
		 $("#menuBar ul li").removeClass('selected');
		$(this).addClass("selected");
	});
});