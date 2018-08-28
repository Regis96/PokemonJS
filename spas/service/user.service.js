angular.module('treinadorPokemon')
    .service('userService', ['$location', '$rootScope', function ($location, $rootScope) {
        this.usuario = {};

        this.usuarios = [
            { login: 'regis', cpf: '12345678911', idade: '21', pokemons: [], senha: '1' },
            { login: 'italo', cpf: '12345678900', idade: '21', pokemons: [], senha: '87654321' }
        ];

        this.logar = function (usuario) {
            for (var each of this.usuarios) {
                if (each.login === usuario.login) {
                    if (each.senha === usuario.senha) {
                        this.usuario = angular.copy(each);
                        this.erro = false;
                        $location.path('/treinadores');
                        $rootScope.$emit('mudancaUsuario', usuario);
                        return;
                    }
                }
            }
            $rootScope.$emit('erro', 'Usuário e/ou senha incorretos');
        };

        this.deslogar = function () {
            $rootScope.$emit('mudancaUsuario', {});
            this.usuario = {};
            $location.path('/login');
        };

        this.getUsuario = function () {
            return this.usuario;
        };

        this.getUsuarios = function () {
            return this.usuarios;
        };

        this.cadastrarTreinador = function (treinador) {
            this.usuarios.push(treinador);
            this.usuario = angular.copy(treinador);
            this.erro = false;
            $location.path('/treinadores');
            $rootScope.$emit('mudancaUsuario', treinador);
        };
    }]);