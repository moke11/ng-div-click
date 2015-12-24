angular.module('moke11.div-click', [])
    .directive('divClick', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    element.html('You clicked me 1!');
               });
                element.on('mouseenter', function () {
                    element.css('background-color', 'yellow');
                });
                element.on('mouseleave', function () {
                    element.css('background-color', 'white');
                });
            }
        };
    });