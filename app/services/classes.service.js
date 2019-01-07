(function () {
    'use strict';

    angular.module('hsApp')
        .service('classesService', classesService);

    function classesService($http, serverUrl) {
        var service = this;

        service.get = function () {
            var url = serverUrl + '/info';

            return $http.get(url)
                .then(function (response) {
                    return response.data.classes;
                });
        };
    }
})();