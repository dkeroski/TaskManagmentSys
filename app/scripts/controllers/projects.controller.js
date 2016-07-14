(function() {
    'use strict';

    angular
        .module('taskmgnApp')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['projectService'];

    function ProjectsController(projectService) {
        var vm = this;
        //call service for get all projects in list
        vm.projects = projectService.getProjects();

    }
})();