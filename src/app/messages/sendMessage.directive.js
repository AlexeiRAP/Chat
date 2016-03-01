(function() {
	'use strict';

	angular
		.module('gpstMainTask')
		.directive('sendMessage', sendMessage);

	/** @ngInject */
	function sendMessage(messageService, $compile) {
		return function(scope, element, log){
			element.bind("click", function(){
				var vm = this;
				var myMsg = scope.myMessage;
				scope.myTimestamp = new Date().getTime();
				//document.getElementById('history').innerHTML+= '<div class="myMessages">' + name + ': ' + myMsg + '</div>';
				messageService.saveMessages(myMsg, scope.myTimestamp);
				scope.myMessage = '';

				vm.messagehistory = messageService.getMessages(scope.timestamp);
				angular.forEach(vm.messagehistory, function(item){
				if (scope.timestamp < item.timestamp){

					if (item.user === scope.myName){
						angular.element(document.getElementById('history')).append($compile("<div id='myMessages' class='myMessagesClass'> Alex: <br>" + item.msg + "</div>")(scope));  
					}
				else {
				console.log('не мое')
				angular.element(document.getElementById('history')).append($compile("<div id='alienMessages' class='alienMessagesClass'>" + item.user + ":<br> " + item.msg + "</div>")(scope));   
				}  
			}

		});
		scope.timestamp = new Date().getTime(); 

		});

		}
	}
})();
