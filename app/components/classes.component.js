(function () {
    'use strict';

    angular.module('hsApp')
        .component('hsClasses', {
            templateUrl: 'app/components/classes.component.html',
            controller: ClassesController,
            bindings: {
                currentClass: '='
            }
        });

    function ClassesController(classesService) {
        var vm = this;
        vm.classNames = [];
        vm.isLoading = false;

        vm.$onInit = function () {
            loadClasses();
        };

        vm.selectClass = function (className) {
            vm.currentClass = className;
        };

        function loadClasses() {
            vm.isLoading = true;
            vm.classNames = [];

            classesService.get()
                .then(function (classNames) {
                    vm.classNames = classNames;
                })
                .finally(function () {
                    vm.isLoading = false;
                });
        }
    }
})();