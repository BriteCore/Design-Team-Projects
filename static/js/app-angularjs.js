var app = angular.module("contactApp", ["ngRoute"]);

app.controller("appCtrl", function($scope){
    $scope.message="hello";
    $scope.note="";
    $scope.noteArray =[];
    $scope.noteTitle = "Note";
    $scope.addNote = function() {
        if ($scope.note !== '') {
            $scope.noteArray.push($scope.note);
            $scope.note ='';
        }
    };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./../../templates/contact-profile.html"
    })
    .when("/reminders", {
        templateUrl : "./../../templates/reminders.html"
    })
    .when("/contactList", {
        templateUrl : "./../../templates/contact-list.html"
    })
    .when("/createContact", {
        templateUrl : "./../../templates/create-contact.html"
    })
    .when("/dashboard", {
        templateUrl : "./../../templates/dashboard.html"
    })
    .otherwise({
        templateUrl : "./../../templates/contact-profile.html"
    });
});