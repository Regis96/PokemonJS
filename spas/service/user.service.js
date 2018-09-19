(function (angular) {
    angular.module('treinadorPokemon')
        .service('userService', userService);

    userService.$inject = [
        '$location',
        '$rootScope',
        '$http',
        '$timeout'
    ];

    function userService($location, $rootScope, $http, $timeout) {
        var vm = this;
        vm.usuario = {};
        vm.logar = function (usuario) {
            vm.getUsuarios()
                .then(function (response) {
                    for (var each of response.data) {
                        if (each.usuario.email === usuario.email) {
                            if (each.usuario.senha === usuario.senha) {
                                vm.usuario = angular.copy(each);
                                vm.erro = false;
                                $location.path('/treinadores');
                                $rootScope.$emit('mudancaUsuario', vm.usuario);
                                return;
                            }
                        }
                    }
                }, function (error) {
                    $rootScope.$emit('erro', 'Usuário e/ou senha incorretos');
                });
        };

        vm.deslogar = function () {
            $rootScope.$emit('mudancaUsuario', {});
            vm.usuario = {};
            $location.path('/login');
        };

        //usuario logado
        vm.getUsuario = function () {
            return vm.usuario;
        };

        vm.getUsuarios = function () {
            return new Promise(function (resolve, reject) {
                resolve({'data': [vm.usuario]});
            });

            // return $http({
            //     method: 'GET',
            //     url: 'http://localhost/pokemon/rest/treinador/'
            // });
        };

        vm.cadastrarTreinador = function (treinador) {
            for (var each of treinador.pokemons) {
                delete each.icone;
            }
            // $http({
            //     method: 'POST',
            //     url: 'http://localhost/pokemon/rest/treinador/',
            //     data: treinador
            // }).then(function (response) {
            vm.usuario = angular.copy(treinador);
            vm.erro = false;
            $location.path('/treinadores');
            $rootScope.$emit('mudancaUsuario', treinador);
            // }, function (error) {
            //     $rootScope.$emit('erro', 'Erro:' + error);
            // });
        };
    }
})(angular);