/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name moContato
 *
 * @description
 * Componente responsável pela página contato da aplicação.
 *
 */
define(['text!contato/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'efContato';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/contato');
                $stateProvider.state('container.public.contato', {
                    url: '^/contato',
                    views: {
                        content: {
                            template: view,
                            controller: 'efContatoController'
                        }
                    },
                    id: 'contato'
                });
            }]);

            thisComponent.controller('efContatoController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            /*thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'home',
                    position: 0,
                    label: 'Início',
                    href: '#',
                    class: 'ef-icon ef-icon-home',
                    state: 'container.private.home'
                });

            }]);*/
        }
    };
});