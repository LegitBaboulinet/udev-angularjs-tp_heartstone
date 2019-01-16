(function () {
    'use strict';

    angular
        .module ('hsApp')
        .component ('hsClasses', {
            bindings: {
                currentClass: '='
            },
            controller: componentController,
            templateUrl: "app/components/classes.component.html"
        });

        function componentController(classesService){
            var vm = this;
            
            /** Variables */
            vm.classes = [];

            /** Fonctions */
            vm.$onInit = function() {
                classesService.get()
                .then(
                    function(classes) {
                        vm.classes = classes;
                    }
                );
            }
            
        }

} ());