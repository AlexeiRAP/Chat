(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .service('messageService', messageService)

  /** @ngInject */
  function messageService($http, $q, $log) {
    
    var myhistory =[ { user: 'Olga', msg: 'Hi!', timestamp: 1456651674675 },
                      { user: 'Anton', msg: 'Hi-hi!', timestamp: 1456651692612 },
                      { user: 'Olga', msg: 'How are you?', timestamp: 1456651891409 }

                    ]

    this.getMessages = function(timeStamp){
     
      /*$http.get('GET /api/message/list?timestamp=' + timeStamp)
        .then(function(response) {
          return response.data;
        });*/
        return myhistory
    }
    
    this.saveMessages = function(message) {
      var timeNow = new Date().getTime();
      
      var myMsg = {user:'Alex', msg: message, timestamp: timeNow} 
      $log.info(myMsg);
      myhistory.push(myMsg);
      return myhistory
     /* $http.post('/api/message/send?timestamp=' + myMsg.timestamp + '&msg=' + myMsg.msg+ '&username=' + myMsg.name);*/
    }
  }
})();
