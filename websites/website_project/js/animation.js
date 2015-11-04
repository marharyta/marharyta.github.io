$(document).ready(function(){

	
	//hidden-api
	//$( ".apis ul li" ).addClass( "hidden-api" );


   // jQuery methods go here...
 

  
   
   //display booking related apis
   $(".home").click(function(){
   		$( ".flextoolkit div" ).addClass( "dim" );
   		//$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".home-apis" ).removeClass( "dim" );
      //last-of-type
   		//$(".show-all").show();
      //$(".flextoolkit").removeClass( "flextoolkit" ).addClass("apis-auto");
    });
   //or
   $(".booking").click(function(){
   		//$( ".flextoolkit div" ).addClass( "hidden-api" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      //$( ".home-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      //$(".show-all").show();
      $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".home-apis" ).removeClass( "dim" );
    });

   //display transportation related apis

   $(".taxi").click(function(){
      //  $( ".flextoolkit div" ).addClass( "hidden-api" );
      //$( ".transportation-apis" ).show().addClass("apis-auto flextoolkit");
     // $( ".transportation-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      //$(".show-all").show();
      $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".transportation-apis" ).removeClass( "dim" );
    });
   //or
   $(".transportation").click(function(){
   		// $( ".flextoolkit div" ).addClass( "hidden-api" );
     // $( ".transportation-apis" ).show().addClass("apis-auto flextoolkit");
     // $( ".transportation-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
     // $(".show-all").show();
     $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".transportation-apis" ).removeClass( "dim" );
    });



 	//display airport related apis
   $(".traveller").click(function(){
   	 //$( ".flextoolkit div" ).addClass( "hidden-api" );
     // $( ".airport-apis" ).show().addClass("apis-auto flextoolkit");
     // $( ".airport-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
     // $(".show-all").show();
     $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".airport-apis" ).removeClass( "dim" );
    });
   //or
   $(".airport").click(function(){
   		/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".airport-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".airport-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
      $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".airport-apis" ).removeClass( "dim" );
    });
   //or
   $(".airport1").click(function(){
   		/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".airport-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".airport-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
      $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".airport-apis" ).removeClass( "dim" );
    });




   //display flight realated apis
    $(".plane1").click(function(){
    	/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".takeoff-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".takeoff-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
      $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".takeoff-apis" ).removeClass( "dim" );
    });
    //or
    $(".take-off").click(function(){
    	/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".takeoff-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".takeoff-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
       $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".takeoff-apis" ).removeClass( "dim" );
    });

    $(".inflight").click(function(){
    	/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".inflight-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".inflight-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
       $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".inflight-apis" ).removeClass( "dim" );

    });

    $(".landing").click(function(){
    	/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".landing-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".landing-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
       $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".landing-apis" ).removeClass( "dim" );
    });

	//display destination apis
	$(".destination").click(function(){
		/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".destination-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".destination-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();*/
       $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".destination-apis" ).removeClass( "dim" );

    });
    $(".airport2").click(function(){
    	/*$( ".flextoolkit div" ).addClass( "hidden-api" );
      $( ".destination-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".destination-apis div:last" ).addClass( "border-dotted-right" );
      //last-of-type
      $(".show-all").show();//*/
       $( ".flextoolkit div" ).addClass( "dim" );
      //$( ".home-apis" ).show().addClass("apis-auto flextoolkit");
      $( ".destination-apis" ).removeClass( "dim" );
    });

    //show all
    $(".show-all").click(function(){
      $(".show-all").hide();
		$( ".flextoolkit div" ).removeClass( "hidden-api border-dotted-right border-dotted-bottom  border-white" );

    });

    //show-all


});
