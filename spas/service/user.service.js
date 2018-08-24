angular.module('treinadorPokemon')
    .service('userService',['$location',function($location){
        this.usuario = {};

        this.usuarios = [
            { login: 'regis', senha: '1' },
            { login: 'italo', senha: '87654321' }
        ]

        this.logar = function(usuario){
            for (var each of this.usuarios) {
                if (each.login === usuario.login) {
                    if (each.senha === usuario.senha) {
                        this.usuario = angular.copy(usuario);
                        this.erro = false;
                        $location.url('treinadores');
                        return;
                    }
                }
            }
        }

        this.deslogar = function(){
            this.usuario = null;
            $window.location.href = '/';
        }
    }])