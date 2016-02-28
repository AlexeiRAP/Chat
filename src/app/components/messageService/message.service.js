(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .service('messageService', messageService)

  /** @ngInject */
  function messageService($http, $q, $log) {
    
    var myhistory =[ {name: 'Marta', msg: 'Hi', timestamp: ''}
                    ]

    this.getMessages = function(timeStamp){
     
      /*$http.get('GET /api/message/list?timestamp=' + timeStamp)
        .then(function(response) {
          return response.data;
        });*/
        return myhistory
    }
    
    this.saveMessages = function(message, timeStamp) {
      var timeNow = new Date().getTime();
      
      var myMsg = {name:'Alex', msg: message, timestamp: timeNow} 
      $log.info(myMsg);
      myhistory.push(myMsg);
      return myhistory
     /* $http.post('/api/message/send?timestamp=' + myMsg.timestamp + '&msg=' + myMsg.msg+ '&username=' + myMsg.name);*/
    }
  }
})();
