(function () {
    'use strict';

    angular.module('hsApp')
        .component('hsCards', {
            templateUrl: 'app/components/cards.component.html',
            controller: CardsController,
            bindings: {
                currentClass: '<'
            }
        });

    function CardsController(cardsService) {
        var vm = this;
        vm.cards = [];
        vm.isLoading = false;

        vm.$onChanges = function (changes) {
            if (changes.currentClass && changes.currentClass.currentValue) {
                var newClassName = changes.currentClass.currentValue;
                loadCards(newClassName);
            }
        };

        function loadCards(className) {
            vm.cards = [];
            vm.isLoading = true;

            cardsService.get(className)
                .then(function (cards) {
                    vm.cards = cards;
                })
                .finally(function () {
                    vm.isLoading = false;
                });
        }
    }
})();