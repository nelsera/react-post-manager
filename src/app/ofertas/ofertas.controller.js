(function() {
  'use strict';

  angular
    .module('travelplusManager')
    .controller('OfertasController', OfertasController);

  /** @ngInject */
  function OfertasController($location, $window) {
    if (!$window.localStorage.getItem('logged')) {
      $location.path('/');
    }

  }
})();
