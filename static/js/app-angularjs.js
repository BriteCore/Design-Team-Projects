var app = angular.module("contactApp", ["ngRoute", "moment-picker"]);

app.factory('addNoteService', function() {
    var service = {
        model: []
    }
    return service;
});

app.factory('addUser', function() {
    var service = {
        model: []
    }
    return service;
});

app.directive('file', function(){
    return {
        scope: {
            file: '='
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file ? file.name : undefined;
                scope.$apply();
            });
        }
    };
});

app.controller("appCtrl", function($scope, $http, addNoteService, addUser){
    $scope.message="hello";
    $scope.note="";
    $scope.userArray = addUser.model;
    $scope.noteArray = addNoteService.model;;
    $scope.noteTitle = "Note";
    $scope.addNote = function() {
        if ($scope.note !== '') {
            $scope.noteArray.push($scope.note);
            $scope.note ='';
        }
    };

    $scope.favoriteClick = function () {
            angular.element('#favorite').toggleClass('w3-text-red');
    };

    $http.get("static/data/contact-list.json")
    .then(function(response) {
        $scope.contactListData = response.data;

    }, function myError(response) {
        console.log(response.statusText + " "+ response.status);
    });


    $scope.user = {
        "avatar": "",
        "firstName": "",
        "lastName": "",
        "title": "",
        "company": "",
        "favorite": ""
    };

    $scope.createUser = function(e) {
        $scope.userArray.push($scope.user);
        $scope.user = {
            "avatar": "",
            "firstName": "",
            "lastName": "",
            "title": "",
            "company": "",
            "favorite": ""
        };
    };
    // $scope.dateReminderCondition = $('#datetimepicker').data("DateTimePicker").date();
    // console.log($scope.dateReminderCondition);
    /* $('body').on('click','#addReminder', function() {

        reminder = $('#remindMe');
        if ( reminder.val() !== '') {
            dateReminderH = $('#datetimepicker').data("DateTimePicker").date().format('h:mm A');
            dateReminder = $('#datetimepicker').data("DateTimePicker").date().format('dddd, MMMM Do YYYY');
            //console.log($('#datetimepicker').data("DateTimePicker").date().format('dddd, MMMM Do YYYY, h:mm a'));
            $("#messageReminder").append('<div class="w3-container w3-card w3-margin-bottom w3-padding"><p>'+reminder.val()+" <bold>on</bold> "+dateReminder+" at "+dateReminderH+'.</p></div>');

            $("#reminder").append('<div class="w3-container w3-card w3-margin-bottom"><h5 class="w3-opacity"><b>Reminder</b></h5><p>'+reminder.val()+" on "+dateReminder+" at "+dateReminderH+'.</p></div>');
            reminder.val('');
            $('#dateReminder').val('');

        }
    }); */
});


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/contact-profile.html",
        controller : "appCtrl"
    })
    .when("/reminders", {
        templateUrl : "templates/reminders.html",
        controller : "appCtrl"
    })
    .when("/contactList", {
        templateUrl : "templates/contact-list.html",
        controller : "appCtrl"
    })
    .when("/createContact", {
        templateUrl : "templates/create-contact.html",
        controller : "appCtrl"
    })
    .when("/dashboard", {
        templateUrl : "templates/dashboard.html",
        controller : "appCtrl"
    })
    .otherwise({
        templateUrl : "templates/contact-profile.html",
        controller : "appCtrl"
    });
});

app.directive('calDirective', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).datetimepicker(scope.$eval(attrs.calDirective));
        }
    };
});

app.directive('calDirectiveData', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).data(scope.$eval(attrs.calDirectiveData));
        }
    };
});