
var testApp = angular.module('testApp', []);
testApp.config(function($interpolateProvider, $httpProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

//
//ratingsApp.service("ratingService", function($http, $q) {
//
//    this.getRatings = function() {
//        var deferred = $q.defer();
//        $http({
//            url: '/ratings/api',
//            method: 'GET',
//            format: 'json'
//            })
//            .success(function(data,status,headers,config){
//                deferred.resolve(data);
//            })
//            .error(function(data,status,headers,config){
//                deferred.reject('ERROR');
//            });
//        return deferred.promise;
//
//    };
//
//    this.postRating = function(data){
//        var deferred = $q.defer();
//        $http({
//            url: '/ratings/api',
//            method: 'POST',
//            data: data,
//            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//            })
//            .success(function(data,status,headers,config){
//                deferred.resolve(data);
//            })
//            .error(function(data,status,headers,config){
//                deferred.reject('ERROR');
//            });
//        return deferred.promise;
//
//    };
//});
//
//ratingsApp.controller("RatingsController", function(ratingService, $scope) {
//    $scope.ratings=[];
//
//    var _getStatRatings = function (){
//        var getPromise = ratingService.getRatings();
//        getPromise.then(function(resolve){
//            $scope.rating_stats = resolve;
//        },
//        function(reject){
//            $scope.rating_stats = reject;
//        });
//    };
//
//    var _postStatRating = function (msg){
//        var getPromise = ratingService.postRating(msg);
//        getPromise.then(function(resolve){
//            $scope.status_msg = resolve;
//        },
//        function(reject){
//            $scope.status_msg = reject;
//        });
//    };
//
//    _getStatRatings();
//
//    $scope.add=function(){
//        var name = 'no name';
//        if (typeof $scope.new_rating  === 'number') {
//            if ($scope.new_rating_name){
//                name = $scope.new_rating_name
//            }
//            $scope.ratings.push({'value': $scope.new_rating, 'name': name});
//        }
//        $scope.new_rating="";
//        $scope.new_rating_name="";
//    };
//
//    $scope.save=function(){
//        var ratingCount = $scope.ratings.length;
//        if (ratingCount) {
//            var ratingSum = 0;
//            var sortedRatings = [];
//            for (var i = 0; i < ratingCount; i++) {
//                sortedRatings.push($scope.ratings[i]['value']);
//                ratingSum += $scope.ratings[i]['value'];
//            }
//            sortedRatings = sortedRatings.sort();
//            $scope.mid = sortedRatings[Math.floor(ratingCount / 2)];
//            $scope.avg = ratingSum / ratingCount;
//            $scope.count = ratingCount;
//            var msg = JSON.stringify({"median": $scope.mid, "average": $scope.avg, "count": ratingCount});
//            _postStatRating(msg);
//            _getStatRatings();
//            $scope.clear();
//        }
//    };
//
//    $scope.clear=function(){
//        $scope.ratings = [];
//    };
//
//    $scope.remove=function(id){
//        if (id > -1) {
//            $scope.ratings.splice(id, 1);
//        }
//    };
//
//    $scope.add_keypress = function(keyEvent) {
//      if (keyEvent.which === 13)
//        $scope.add();
//    };
//
//});