$(document).ready(function(){
// window.onload=function(){
    $("#load-c").fadeOut("slow",function(){
	   $(".wrapper").addClass("wrapper-bg-show");
	});
    var $body=$("body");
    var $main=$("#main");
    $main.on("click",toggleMenu);
 //    var $me;
 //    var options={
	// 	onStart: {
	// 	  duration: 500,
	// 	  render: function(url, $container) {
	// 	  	$me.children().addClass('out');
	// 	  	if($main.hasClass("showMenu")){
	// 			$main.removeClass("showMenu");   
	// 	  	}
	// 	  }
	// 	},
	// 	onEnd: {
	// 	  duration: 300,
	// 	  render: function(url, $container, $content) {
	// 	  	$body.css('cursor', 'auto');
 //            $body.find('a').css('cursor', 'auto');
	// 	    $container.html('');
	// 	    $content.appendTo($container);
	// 	  }
	// 	}
	// };
	//$me=$main.smoothState(options);
// };
});
 function toggleMenu(e){
 	if(e.target.nodeName.toLowerCase()=="i"||e.target.id=="drawer"){
 	  var $main=$("#main");
	  if($main.hasClass("showMenu")){
	    $main.removeClass("showMenu");    
	  }
	  else{
	    $main.addClass("showMenu");
	  }
 	}
}