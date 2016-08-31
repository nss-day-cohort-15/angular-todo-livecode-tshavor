"use strict";

// create a new angular module.  2 arguments: [] holds external modukes to load into this one...
var app= angular.module("TodoApp", ["ngRoute"]);

// here we set up routing for before we run the app
app.config(function ($routeProvider){
    $routeProvider.
        when("/items/list", {
            // only the U is capitalized!!!///
            templateUrl: "partials/item-list.html",
            controller: "TodoCtrl"
        }).
        when('/items/new', {
            templateUrl: "partials/item-form.html",
            controller: "TodoCtrl"
        }).
        otherwise("/items/list");
});



