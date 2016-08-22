/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name faBiblioteca
 *
 * @description
 * Componente responsável pela página biblioteca da aplicação.
 *
 */
define(['text!biblioteca/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'faBiblioteca';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/biblioteca');
                $stateProvider.state('container.private.biblioteca', {
                    url: '^/biblioteca',
                    views: {
                        content: {
                            template: view,
                            controller: 'faBibliotecaController'
                        }
                    },
                    id: 'biblioteca'
                });
            }]);

            thisComponent.controller('faBibliotecaController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'biblioteca',
                    position: 2,
                    label: 'Biblioteca',
                    href: '#',
                    class: 'fa-icone glyphicon glyphicon-book',
                    state: 'container.private.biblioteca'
                });

            }]);
        }
    };
});