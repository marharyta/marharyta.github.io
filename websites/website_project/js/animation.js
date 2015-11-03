$(document).ready(function(){

	
	//hidden-api
	//$( ".apis ul li" ).addClass( "hidden-api" );
	
		$(".show-all").hide();

   // jQuery methods go here...
 

  
   
   //display booking related apis
   $(".home").click(function(){
   		$( ".apis ul li" ).addClass( "hidden-api" );
   		$( ".home-apis li" ).removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
   		$(".show-all").show();
    });
   //or
   $(".booking").click(function(){
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $( ".home-apis li" ).removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
        $(".show-all").show();
    });

   //display transportation related apis

   $(".taxi").click(function(){
   		console.log("it works");
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".show-all").show();
        $(".transportation-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
   //or
   $(".transportation").click(function(){
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".transportation-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });



 	//display airport related apis
   $(".traveller").click(function(){
   	console.log("it works");
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".airport-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
   //or
   $(".airport").click(function(){
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".airport-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
   //or
   $(".airport1").click(function(){
   		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".airport-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });




   //display flight realated apis
    $(".plane1").click(function(){
    		console.log("it works");
    	$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
    //or
    $(".take-off").click(function(){
    	$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    $(".inflight").click(function(){
    	$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    $(".landing").click(function(){
    	$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

	//display destination apis
	$(".destination").click(function(){
		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
    $(".airport2").click(function(){
    	$( ".apis ul li" ).addClass( "hidden-api" );
        $(".other-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    //show all
    $(".show-all a").click(function(){
		$( ".apis ul li" ).addClass( "hidden-api" );
        $(".apis ul li").removeClass( "hidden-api border-white border-dotted-bottom" );
        $(".airport-apis li").removeClass( "hidden-api" ).addClass( "border-dotted-bottom" );
    });

    //show-all


});
