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
                                $location.path('/home');
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
        vm.getUsuario = function (id = null) {
            return id ? getUsuarioById(id) : vm.usuario;
        };

        function getUsuarioById(id) {
            var usuarios = [{
                id: 0,
                idade: 21,
                nome: 'Régis',
                pokemons: [{
                    ataque: 18,
                    defesa: 15,
                    icone: "./spas/resources/icones/4.png",
                    id: 3,
                    level: 5,
                    nome: "Charmander",
                    tipos: [{
                        nome: "fogo",
                        id: "1"
                    }],
                    vida: 61,
                }],
                usuario: {
                    email: 'r@r',
                    senha: '123'
                }
            }, {
                id: 1,
                idade: 23,
                nome: 'Italo',
                pokemons: [{
                    "icone": "./spas/resources/icones/1.png",
                    "nome": "Bulbasaur",
                    "tipos": [{
                        "nome": "venenoso",
                        "id": "1"
                    }, {
                        "nome": "grama",
                        "id": "2"
                    }],
                    "level": 5,
                    "id": 0,
                    "ataque": 13,
                    "defesa": 13,
                    "vida": 68
                }],
                usuario: {
                    email: 'i@i',
                    senha: '123'
                }
            }];

            return usuarios[id];
        }

        vm.getUsuarios = function () {
            return new Promise(function (resolve, reject) {
                resolve({
                    'data': [{
                        id: 0,
                        idade: 21,
                        nome: 'Régis',
                        pokemons: [{
                            ataque: 18,
                            defesa: 15,
                            icone: "./spas/resources/icones/4.png",
                            id: 3,
                            level: 5,
                            nome: "Charmander",
                            tipos: [{
                                nome: "fogo",
                                id: "1"
                            }],
                            vida: 61,
                        }],
                        usuario: {
                            email: 'r@r',
                            senha: '123'
                        }
                    }, {
                        id: 1,
                        idade: 23,
                        nome: 'Italo',
                        pokemons: [{
                            ataque: 18,
                            defesa: 15,
                            icone: "./spas/resources/icones/4.png",
                            id: 3,
                            level: 5,
                            nome: "Charmander",
                            tipos: [{
                                nome: "fogo",
                                id: "1"
                            }],
                            vida: 61,
                        }],
                        usuario: {
                            email: 'i@i',
                            senha: '123'
                        }
                    }]
                });
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
            $location.path('/home');
            $rootScope.$emit('mudancaUsuario', treinador);
            // }, function (error) {
            //     $rootScope.$emit('erro', 'Erro:' + error);
            // });
        };
    }
})(angular);