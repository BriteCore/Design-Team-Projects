var app = angular.module("contactApp", []);

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