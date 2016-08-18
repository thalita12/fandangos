/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name faHome
 *
 * @description
 * Componente responsável pela página home da aplicação.
 *
 */
define(['text!home/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'faHome';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');
                $stateProvider.state('container.private.home', {
                    url: '^/home',
                    views: {
                        content: {
                            template: view,
                            controller: 'faHomeController'
                        }
                    },
                    id: 'home'
                });
            }]);

            thisComponent.controller('faHomeController', ['$scope', function ($scope) {

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
                    class: 'fa-icon fa-icon-home',
                    state: 'container.private.home'
                });

            }]);
        }
    };
});