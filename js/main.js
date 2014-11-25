
window.onload = function () {
    // TODO:: Do your initialization job
	$('button').show();

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    var load = function( numero ) {
    	console.log( numero  + " painettu!");
    	$('button').hide();
    	setInterval(function() {
			sendAJAX("http://labs.humanisti.fixme.fi/gear-http/upload/wearable.txt", {}, function(response){
				var response = $.parseJSON( response );
				console.log(response[ numero ]);
				
				if(response[ numero ]===true) {
					navigator.vibrate(100);
					$('body').html('Somebody commented your status!');
				}
		    } );
    	}, 1000);
	};
    
    // Sample code
    $('#1').click( function(){
    	load(0);
    });
    $('#2').click( function(){
    	load(1);
    });
    $('#3').click( function(){
    	load(2);
    });
};
