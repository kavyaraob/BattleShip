(function () {
    'use strict';
 
    var app= angular.module('bsApp');
    app.controller('lobbyCtrl', ['$scope', function ($scope) {
        var gameScope = $scope;
        
        
        gameScope.gameList = [];
        gameScope.gameList.push({name:"Player 1 Game", id:1});
        gameScope.gameList.push({name:"Player 2 Game", id:2});
        gameScope.gameList.push({name:"Player 3 Game", id:3});
        gameScope.gameList.push({name:"Player 4 Game", id:4});
        gameScope.gameList.push({name:"Player 5 Game", id:5});
    
        gameScope.friendsList = [];
        
        gameScope.friendsList.push ( {username: "Friend 1", id: 1, isOnline: true});
        gameScope.friendsList.push ( {username: "Friend 2", id: 2, isOnline : true});
        gameScope.friendsList.push ( {username: "Friend 3", id: 3, isOnline : false});
        gameScope.friendsList.push ( {username: "Friend 4", id: 4, isOnline : true});
        gameScope.friendsList.push ( {username: "Friend 5", id: 5, isOnline : true});
        gameScope.friendsList.push ( {username: "Friend 6", id: 6, isOnline : false});
        gameScope.friendsList.push ( {username: "Friend 7", id: 7, isOnline : false});
        gameScope.friendsList.push ( {username: "Friend 8", id: 8, isOnline : true});

        
            
    
    }]);
 
}());