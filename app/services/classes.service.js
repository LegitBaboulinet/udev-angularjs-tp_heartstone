(function(){
    'use strict';

    var app = angular.module('hsApp');
    app.service('classesService', classesService);

    /** @ngInject */
    function classesService($http, serverUrl, apiToken){
        var service = this;

        /** Variables */

        /** Fonctions */
        service.get = function() {
            return $http.get(
                serverUrl + '/info',
                {'X-RapidAPI-Key': apiToken}
            ).then(
                function (res) {
                    var classes = res.data.classes;
                    return (classes) ? classes : new Error('Erreur lors de la communication avec l\'API');
                },
                function (err) {
                    console.log(err);
                }
            );
        }
    }

}());