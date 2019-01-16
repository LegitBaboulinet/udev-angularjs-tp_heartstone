(function () {
    'use strict';

    angular
        .module ('hsApp')
        .component ('hsCards', component());


    function component() {

        function componentController(classesService){
            var vm = this;
            
            /** Variables */

            /** Fonctions */
            vm.$onInit = function() {
                classesService.get();
            }
        }

        return {
            bindings: {
                currentClass: '<'
            },
            controller: componentController,
            controllerAs: '${ctrl}'
        }
    }

} ());