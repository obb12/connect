
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
    	sendAJAX("http://www.google.com/", {}, function(response){
    		alert("response");
    		$('.contents').html( response );
    	});
    });
    
};
