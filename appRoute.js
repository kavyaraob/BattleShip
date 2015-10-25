   (function () {
    'use strict';
 
    var app= angular.module('bsApp');
        app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/lobby.html',
                controller  : 'lobbyCtrl'
            })

            .when('/account', {
                templateUrl : 'pages/account.html',
                controller  : 'accountCtrl'
            })

            .when('/help', {
                templateUrl : 'pages/help.html',
                controller  : 'helpCtrl'
            })
         .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginCtrl'
            })
         .when('/stats', {
                templateUrl : 'pages/stats.html',
                controller  : 'statsCtrl'
            })
         .when('/game', {
                templateUrl : 'pages/game.html',
                controller  : 'gameCtrl'
            });
       });
 
}());