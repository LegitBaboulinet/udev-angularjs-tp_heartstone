(function () {
    'use strict';

    angular.module('hsApp')
        .factory('httpInterceptor', function (apiToken) {
            return {
                request: function (config) {
                    config.headers['X-Mashape-Key'] = apiToken;
                    config.cache = true;
                    return config;
                }
            };
        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        });
})();