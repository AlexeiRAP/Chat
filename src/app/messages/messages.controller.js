(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController($scope, $interval, $compile, messageService) {
    $scope.myName = 'Alex';
    $scope.timestamp = 0;
    var vm = this;
    vm.messagehistory = {};
    function getHistoryMessages(scope){
      console.log('проверка');
      console.log($scope.timestamp);
      vm.messagehistory = messageService.getMessages($scope.timestamp);
      angular.forEach(vm.messagehistory, function(item){
        if ($scope.timestamp < item.timestamp){
          if (item.user === $scope.myName){
            angular.element(document.getElementById('history')).append($compile("<div id='myMessages' class='myMessagesClass'> Alex: <br>" + item.msg + "</div><div></div>")($scope));  
          }
          else {
            console.log('не моё')
            angular.element(document.getElementById('history')).append($compile("<div id='alienMessages' class='alienMessagesClass'>" + item.user + ":<br> " + item.msg + "</div><div></div>")($scope));   
          }  
        }
        
      });
      $scope.timestamp = new Date().getTime(); 
    }   
    var time = 10000 // обновление каждые 10 секунд
    getHistoryMessages();
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
