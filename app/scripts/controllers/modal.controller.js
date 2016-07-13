(function() {
    'use strict';

    angular
        .module('taskmgnApp')
        .controller('ModalDemoCtrl', ModalDemoCtrl)
        .controller('ModalFormController', ModalFormController);
    ModalDemoCtrl.$inject = ['$modal', '$log'];

    function ModalDemoCtrl($modal, $log) {
        var vm = this;
        vm.open = function(project) {
            vm.project = project;
            $modal.open({
                templateUrl: './views/modal.html',
                backdrop: true,
                windowClass: 'modal',
                controller: ModalFormController,
                resolve: {
                    project: function() {
                        return vm.project;
                    }
                }
            });
        };
    };

    ModalFormController.$inject = ['$modalInstance', '$log'];

    function ModalFormController($modalInstance, $log) {
        var vm = this;
        vm.project = {
            title: '',
            description: ''
        };

        vm.submit = function() {
            $log.log(JSON.stringify(project));
            $modalInstance.dismiss('cancel');
        };
        vm.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }

})();