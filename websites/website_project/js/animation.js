$(document).ready(function(){

	
	//hidden-api
	//$( ".apis ul li" ).addClass( "hidden-api" );
	
		$(".show-all").hide();

   // jQuery methods go here...
 

  
   
   //display booking related apis
   $(".home").click(function(){
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
   		$( ".home-apis" ).removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
      $( ".home-apis:last-of-type" ).removeClass( "hidden-api" ).addClass( "border-dotted-right" );
      //last-of-type
   		$(".show-all").show();
    });
   //or
   $(".booking").click(function(){
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
        $( ".home-apis" ).removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
        $( ".home-apis:last-of-type" ).removeClass( "hidden-api" ).addClass( "border-dotted-right" );
        $(".show-all").show();
    });

   //display transportation related apis

   $(".taxi").click(function(){
   		console.log("it works");
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
        $(".show-all").show();
        $(".transportation-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
        $( ".transportation-apis:last-of-type" ).removeClass( "hidden-api" ).addClass( "border-dotted-right" );
    });
   //or
   $(".transportation").click(function(){
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
   		 $(".show-all").show();
        $(".transportation-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
        $( ".transportation-apis:last-of-type" ).removeClass( "hidden-api" ).addClass( "border-dotted-right" );
    });



 	//display airport related apis
   $(".traveller").click(function(){
   	console.log("it works");
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
   		 $(".show-all").show();
        $(".airport-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
        $( ".airport-apis" ).removeClass( "hidden-api" ).addClass( "border-dotted-right" );
    });
   //or
   $(".airport").click(function(){
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
   		 $(".show-all").show();
        $(".airport-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
   //or
   $(".airport1").click(function(){
   		$( ".flextoolkit div" ).addClass( "hidden-api" );
   		 $(".show-all").show();
        $(".airport-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });




   //display flight realated apis
    $(".plane1").click(function(){
    		console.log("it works");
    	$( ".flextoolkit div" ).addClass( "hidden-api" );
    	 $(".show-all").show();
        $(".other-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
    //or
    $(".take-off").click(function(){
    	$( ".flextoolkit div" ).addClass( "hidden-api" );
    	 $(".show-all").show();
        $(".takeoff-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    $(".inflight").click(function(){
    	$( ".flextoolkit div" ).addClass( "hidden-api" );
    	 $(".show-all").show();
        $(".inflight-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    $(".landing").click(function(){
    	$( ".flextoolkit div" ).addClass( "hidden-api" );
    	 $(".show-all").show();
        $(".landing-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

	//display destination apis
	$(".destination").click(function(){
		$( ".flextoolkit div" ).addClass( "hidden-api" );
		 $(".show-all").show();
        $(".destination-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });
    $(".airport2").click(function(){
    	$( ".flextoolkit div" ).addClass( "hidden-api" );
    	 $(".show-all").show();
        $(".destination-apis").removeClass( "hidden-api" ).addClass( "border-dotted-bottom border-white" );
    });

    //show all
    $(".show-all a").click(function(){
		$( ".flextoolkit div" ).addClass( "hidden-api" );
        $(".apis ul li").removeClass( "hidden-api border-white border-dotted-bottom" );
        $(".flextoolkit div").removeClass( "hidden-api" ).addClass( "border-dotted-bottom" );
    });

    //show-all


});
