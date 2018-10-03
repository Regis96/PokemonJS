(function (angular) {
        angular.module('treinadorPokemon')
            .controller('verificacaoUsuarioController', verificacaoUsuarioController);

        verificacaoUsuarioController.$inject = [
            'userService',
            '$rootScope',
            '$timeout',
            '$location'
        ];

        function verificacaoUsuarioController(userService, $rootScope, $timeout, $location) {
            var vm = this;

            vm.usuario = {};

            $rootScope.$on('mudancaUsuario', function (event, usuario) {
                vm.usuario = usuario;
            });

            $rootScope.$on('erro', function (event, msgErro) {
                vm.msgErro = msgErro;
                $timeout(function () {
                    vm.msgErro = '';
                }, 2000);
            });

            vm.deslogar = function () {
                userService.deslogar();
            };

            vm.isObjetoVazio = function (objeto) {
                return Object.keys(objeto).length === 0;
            };

            vm.isRouteActive = function(route){
                return route === $location.path();
            };
        }
})(angular);