(function() {
	'use strict';

	angular
		.module('gpstMainTask')
		.directive('sendMessage', sendMessage);

	/** @ngInject */
	function sendMessage(messageService, $log) {
		return function(scope, element, messageService, log){
			element.bind("click", function(){
				$log.info('nen' + scope.myMessage);
				document.getElementById('history').innerHTML+= '<div class="myMessages">' + scope.myMessage + '</div>';
				messageService.saveMessages(scope.myMessage).then(function(){
        /*vm.message = true;*/
      });
				scope.myMessage = '';
		
			});

		}
	}
})();
