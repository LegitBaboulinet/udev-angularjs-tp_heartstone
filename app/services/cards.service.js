(function () {
    'use strict';

    angular.module('hsApp')
        .service('cardsService', cardsService);

    function cardsService($http, serverUrl) {
        var service = this;

        service.get = function (className) {
            var url = serverUrl + '/cards/classes/' + className;

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        };
    }
})();