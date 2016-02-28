(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .service('messageService', messageService)

  /** @ngInject */
  function messageService($http, $q) {
    
    var myhistory =[ {name: 'Alex', msg: 'Hi'},
                    {name: 'Alex', msg: 'It\'s me'}
                    ]

    this.getMessages = function(){
      return myhistory
    }
    
    this.saveMessages = function(message) {
      console.log('привет')
      return function(){
        myhistory.push({name:'Alex', msg: message});
        /*$http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/1', msg);*/
      }

      
      
      /*return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/1', user);*/
    }
  }
})();
