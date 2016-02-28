(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController($scope, $interval, $compile, messageService, $log) {
    var vm = this;
    vm.messagehistory = {};
    function getHistoryMessages(){
      vm.messagehistory = messageService.getMessages();
      

        angular.forEach(vm.messagehistory, function(item){
          angular.element(document.getElementById('history')).append($compile("<div class='alienMessages'>" + item.msg + "</div>")($scope));
        }) 
    }   
    

    $interval(getHistoryMessages, 3000)

    
    /*
    vm.sendMessages = function(){
      vm.message = {user: 'me', text: vm.myMessage}
      $log.info( vm.myMessage );
      
      document.getElementById('history').innerHTML+= '<div class="alienMessages">' + vm.myMessage + '</div>';
      document.getElementById('history').innerHTML+= '<div class="myMessages">' + vm.myMessage + '</div>';
      vm.myMessage = ''
    }*/

    
  }
  
})();
