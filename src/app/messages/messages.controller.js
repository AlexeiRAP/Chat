(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController($scope, $interval, $compile, messageService) {
    $scope.myName = 'Alex';
    var vm = this;
    vm.messagehistory = {};

    function getHistoryMessages($scope){
      $scope.timestamp = new Date().getTime();
      vm.messagehistory = messageService.getMessages($scope.timestamp);
      angular.forEach(vm.messagehistory, function(item){
        if (item.name === $scope.myName){
          angular.element(document.getElementById('history')).append($compile("<div class='myMessages'> Alex: " + item.msg + "</div>")($scope));  
        }
        else {
         angular.element(document.getElementById('history')).append($compile("<div class='alienMessages'>" + item.name + ": " + item.msg + "</div>")($scope));   
        }
      }) 
    }   
    var time = 10000 // обновление каждые 10 секунд

    $interval(getHistoryMessages, time)

    
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
