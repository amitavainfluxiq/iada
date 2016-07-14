'use strict';

/* App Module */
var common_module_app = angular.module('common_module_app', ['ui.router','angularValidator','ngCookies','ui.bootstrap','ngFileUpload','ui.tinymce']);






common_module_app.run(function ($templateCache) {
        $templateCache.put(
            'tmpl-doc-list-wrapper', jQuery('#tmpl-doc-list-wrapper').html());
    });

common_module_app.directive('bxSlider', function () {
        var BX_SLIDER_OPTIONS = {
            minSlides:2 ,
            maxSlides: 2,
            slideWidth: 225
            //slideHeight:315
        };

        return {
            restrict: 'A',
            require: 'bxSlider',
            priority: 0,
            controller: function() {},
            link: function (scope, element, attrs, ctrl) {
                var slider;
                ctrl.update = function() {
                    slider && slider.destroySlider();
                    slider = element.bxSlider(BX_SLIDER_OPTIONS);
                };
            }
        }
    });
common_module_app.directive('bxSliderItem', function($timeout) {
        return {
            require: '^bxSlider',
            link: function(scope, elm, attr, bxSliderCtrl) {
                if (scope.$last) {
                    bxSliderCtrl.update();
                }
            }
        }
    });
common_module_app.directive('docListWrapper', ['$timeout', function ($timeout) {
        return {
            restrict: 'C',
            priority: 500,
            replace: false,
            templateUrl: 'tmpl-doc-list-wrapper',
            scope: { docs: '=docs'},
            link: function (scope, element, attrs) {
            }
        };
    }]);




common_module_app.controller('header', function($scope,$state,$cookieStore,$rootScope,contentservice,$uibModal,$timeout,$http) {



});



common_module_app.controller('logout', function($scope,$state,$cookieStore,$rootScope,contentservice) {

    $cookieStore.remove('userid');
    $cookieStore.remove('userdet');

    $state.go('home');
    return;

}) ;


common_module_app.controller('home', function($http,$scope,$state,$cookieStore,$rootScope,contentservice,$uibModal,$q) {



});

