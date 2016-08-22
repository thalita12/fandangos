/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name faContato
 *
 * @description
 * Componente responsável pela página contato da aplicação.
 *
 */
define(['text!contato/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'faContato';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/contato');
                $stateProvider.state('container.public.contato', {
                    url: '^/contato',
                    views: {
                        content: {
                            template: view,
                            controller: 'faContatoController'
                        }
                    },
                    id: 'contato'
                });
            }]);

            thisComponent.controller('faContatoController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'contato',
                    position: 3,
                    label: 'Contato',
                    href: '#',
                    class: 'fa-icone glyphicon glyphicon-phone-alt',
                    state: 'container.public.contato'
                });

            }]);
        }
    };
});