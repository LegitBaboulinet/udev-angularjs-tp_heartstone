(function(){
    'use strict';

    angular
        .module('hsApp')
        .service('classesService', Service)

    /** @ngInject */
    function Service($http){
        var service = this;

        /** Variables */

        /** Fonctions */
        service.get = function() {
            $http.get(
                angular.module('hsApp').value('serverUrl') + '/info',
                {'X-RapidAPI-Key': '3sFrE3cDwsmsh5zseH4I2AF3eM98p1OCtmUjsnuqwg9LuK09ct'}
            ).then(
                function (results) {
                    console.log(results);
                },
                function (error) {
                    console.log(error);
                }
            );
        }
    }

}());