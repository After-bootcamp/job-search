console.log("app.js is running");

var app = angular.module('app', ["ui.router"]);

// This is using UI-router
app.config(function($stateProvider, $urlRouterProvider){
    //Send unmatched url's to '/'
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('splash', {
            url: "/",
            templateUrl: "splashPage.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        })
        .state('mission', {
            url: "/mission/",
            templateUrl: "partials/mission.html"
        })
        .state('questions', {
            url: "/questions/",
            templateUrl: "partials/questions.html"
        })
        .state('get_involved', {
            url: "/get_involved",
            templateUrl: "partials/form.html"
        })
})
