
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    // Sample code
    $('.contents').click( function(){
    	console.log("Sending ajax");
    	setInterval(function() {
    		sendAJAX("http://labs.humanisti.fixme.fi/gear-http/upload/wearable.txt", {}, function(response){
    			var response = $.parseJSON( response );
    			console.log(response[0]);
    			
    			
    		
    	    		if(response[0]===true)
    	    		{
    	    			navigator.vibrate(2000);
    	    		}
    	}, 100000);
    	
    	});
    });
    
};
