/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name moHome
 *
 * @description
 * Componente responsável pela página home da aplicação.
 *
 */
define(['text!home/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'efHome';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');
                $stateProvider.state('container.private.home', {
                    url: '^/home',
                    views: {
                        content: {
                            template: view,
                            controller: 'efHomeController'
                        }
                    },
                    id: 'home'
                });
            }]);

            thisComponent.controller('efHomeController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'home',
                    position: 0,
                    label: 'Início',
                    href: '#',
                    class: 'ef-icon ef-icon-home',
                    state: 'container.private.home'
                });

            }]);
        }
    };
});