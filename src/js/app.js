var myApp = angular.module('app', []);
myApp.controller('controller', function ($scope, $http, $q, $filter) {

    $scope.talks = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'https://raw.githubusercontent.com/alex-hedley/talks/main/src/data/talks.json';

        $http.get(file)
        .then(function(response) {
            $scope.talks = response.data.talks;
        });
    };
    
    $scope.openRepository = (talk) => {
        window.open(talk.repo);
    }

    $scope.openRepositoryHomepage = (talk) => {
        window.open(talk.presentationUrl);
    }

    $scope.init();
});

myApp.filter('toDate', function() {
    return function(items) {
        return new Date(items);
    };
});
