(function () {
    'use strict';

    angular.module('hsApp')
        .directive('checkImage', function () {
            return {
                link: function (scope, element) {
                    // Set default image if src attribute is empty
                    if (!element.attr('src')) {
                        element.attr('src', '/images/unknown.png');
                    }

                    // Set default image if image doesn't exist
                    element.bind('error', function () {
                        element.attr('src', '/images/unknown.png');
                    });
                }
            };
        });
})();