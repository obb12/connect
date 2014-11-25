/***
 Create a fake AJAX connection using the device as a proxy.
 ***/
$().ready( function() {

window.sendAJAX = ( function() {

	var agent = null;
	var _socket = null;
	var CHANNELID = 104;
	var ProviderAppName = "Fake AJAX";

	var agentCallback = {
			onconnect : function(socket) {
				_socket = socket;
				console.log( _socket );
			},
			onerror : $.noop
		};

	var peerAgentFindCallback = {
			onpeeragentfound : function(peerAgent) {
				try {
					console.log( peerAgent.appName );
					console.log( ProviderAppName );
					if (peerAgent.appName == ProviderAppName) {
						console.log("done?");
						agent.setServiceConnectionListener( agentCallback );
						agent.requestServiceConnection(peerAgent);
						console.log("peer connected");
					}
				} catch(err) {
					console.log( err );
				}
			},
			onerror : function(e) {
				console.log("error!");
				console.log( e );
			}
		}

	webapis.sa.requestSAAgent( function(agents) {
		agent = agents[0];
		agent.setPeerAgentFindListener( peerAgentFindCallback );
		agent.findPeerAgents();
		console.log("searching for peers");

	});

	return function( url , data, callback ) {
		_socket.setDataReceiveListener( function(id, data) {
			
			callback( data );
		} );
		
		_socket.sendData(CHANNELID,  url );
	}

} )();

});
