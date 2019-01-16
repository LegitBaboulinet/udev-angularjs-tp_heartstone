(function () {
    'use strict';

    angular
        .module ('hsApp')
        .component ('hsClasses', component());


    function component() {

        function componentController(){
            var vm = this;
            
            /** Variables */

            /** Fonctions */
        }

        return {
            bindings: {
                currentClass: '='
            },
            controller: componentController,
            controllerAs: '${ctrl}'
        }
    }

} ());