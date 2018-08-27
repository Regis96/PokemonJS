angular.module('treinadorPokemon')
    .controller('verificacaoUsuarioController',
        ['userService', '$rootScope', function (userService, $rootScope) {
            var vm = this;

            vm.usuario = {};

            $rootScope.$on('mudancaUsuario', function (event, usuario) {
                vm.usuario = usuario;
            });

            vm.deslogar = function () {
                userService.deslogar();
            };

            vm.isObjetoVazio = function(objeto){
                return Object.keys(objeto).length === 0;
            };

        }]);