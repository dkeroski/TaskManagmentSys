'use strict';

/**
 * @ngdoc overview
 * @name taskmgnApp
 * @description
 * # taskmgnApp
 *
 * Main module of the application.
 */
angular
    .module('taskmgnApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap'

    ])
    //route config
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            })
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'views/tasks.html',
                controller: 'TasksController',
                controllerAs: 'vm'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'views/projects.html',
                controller: 'ProjectsController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            })
            .state('newproject', {
                url: '/newproject',
                templateUrl: 'views/newproject.html',
                controller: 'NewProjectController',
                controllerAs: 'vm'
            })

    });