/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name faSmacss
 *
 * @description
 * Componente responsável pela página smacss da aplicação.
 *
 */
define(['text!smacss/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'faSmacss';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/smacss');
                $stateProvider.state('container.private.smacss', {
                    url: '^/smacss',
                    views: {
                        content: {
                            template: view,
                            controller: 'faSmacssController'
                        }
                    },
                    id: 'smacss'
                });
            }]);

            thisComponent.controller('faSmacssController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'smacss',
                    position: 1,
                    label: 'SMACSS',
                    href: '#',
                    class: 'fa-icone glyphicon glyphicon-folder-open',
                    state: 'container.private.smacss'
                });

            }]);
        }
    };
});