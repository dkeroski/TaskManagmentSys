(function() {
    'use strict';

    angular
        .module('taskmgnApp')
        .service('projectService', projectService);

    projectService.$inject = [];

    function projectService() {
        var projectList = [];

        var addProject = function(newProject) {
            projectList.push(newProject);
        }

        var getProjects = function() {
            return projectList;
        }

        return {
            getProjects: getProjects,
            addProject: addProject
        }
    }
})();