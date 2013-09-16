'use strict';

angular.module('<%= _.camelize(appname) %>App', [<% if (config.get('angularBootstrap', false)) { %>'ui.bootstrap'<% } %>])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
