(function() {
	'use strict';

	angular
		.module('gpstMainTask')
		.directive('sendMessage', sendMessage);

	/** @ngInject */
	function sendMessage(messageService) {
		return function(scope, element, log){
			element.bind("click", function(){
				var myMsg = scope.myMessage;
				var name = scope.myName;
				document.getElementById('history').innerHTML+= '<div class="myMessages">' + name + ': ' + myMsg + '</div>';
				messageService.saveMessages(myMsg, scope.timestamp);
				scope.myMessage = '';
			});

		}
	}
})();
