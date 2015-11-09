(function () {
    'use strict';

    var app = angular.module('bsApp');
    app.controller('accountCtrl', ['$scope', function ($scope) {
        var accountScope = $scope;

        accountScope.accValues = [];
        accountScope.accValues.push({ name: "TestUser", id: 1 });




    }]);

}());