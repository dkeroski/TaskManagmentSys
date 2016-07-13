(function() {
    'use strict';

    angular
        .module('taskmgnApp')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = [];

    function ProjectsController() {
        var vm = this;
        vm.projects = [];

    }
})();