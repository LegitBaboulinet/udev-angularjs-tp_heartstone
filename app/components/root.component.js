(function () {
    'use strict';

    angular.module('hsApp')
        .component('hsRoot', {
            templateUrl: 'app/components/root.component.html',
            controller: RootController
        });

    function RootController() {
        var vm = this;
        vm.currentClass = '';
    }
})();