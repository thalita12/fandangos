/**
 * @license Todos os direitos reservados a AZ Informática.
 * @ngdoc overview
 * @name faAula
 *
 * @description
 * Componente responsável pela página home da aplicação.
 *
 */
define(['text!less/view.html'], function (view) {

    return {

        initialize: function (thisComponent) {

            thisComponent.name = 'faLess';

            thisComponent.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/less');
                $stateProvider.state('container.private.less', {
                    url: '^/less',
                    views: {
                        content: {
                            template: view,
                            controller: 'faLessController'
                        }
                    },
                    id: 'less'
                });
            }]);

            thisComponent.controller('faLessController', ['$scope', function ($scope) {

            }]);

            thisComponent.beforeInitialize('azperegrin', function(module, $q){
                module.constant('azPeregrinSession', {});
                var deffered = $q.defer();
                deffered.resolve();
                return deffered.promise;
            });

            thisComponent.run(['azMenuService', function (azMenuService) {

                azMenuService.addMenu({
                    id: 'less',
                    position: 0,
                    label: 'LESS',
                    href: '#',
                    class: 'fa-icon fa-icon-empresa',
                    state: 'container.private.less'
                });

            }]);
        }
    };
});