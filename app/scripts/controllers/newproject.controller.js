(function() {
    'use strict';

    angular
        .module('taskmgnApp')
        .controller('NewProjectController', NewProjectController);

    NewProjectController.$inject = ['$location', 'projectService'];

    function NewProjectController($location, projectService) {
        var vm = this;
        vm.project = {
            title: '',
            descripton: '',
        }

        vm.submit = function(project) {
            project.title = vm.title;
            projectService.addProject();
            console.log(project);
        }
        vm.cancel = function() {
            $location.path('/projects');
        }

    }
})();