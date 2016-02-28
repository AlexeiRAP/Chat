(function() {
  'use strict';

  angular
    .module('gpstMainTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/messages/messages.html',
        controller: 'MessagesController',
        controllerAs: 'messages'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
